import { useEffect, useRef, useState } from "react";
import socketIO from "socket.io-client";

import Modal from "./Modal";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import { nameFormatter } from "../helpers/nameFormatter";
import Loader from "./Loader";

const ENDPOINT = "https://chat-app-swsy.onrender.com";

function timeFormatter(date) {
    let hours = date.getHours();
    const am_pm = hours >= 12 ? "PM" : "AM";
    hours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    const minutes = date.getMinutes();
    return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(
        2,
        0
    )} ${am_pm}`;
}

function Chat(props) {
    const messageRef = useRef(null);
    const [id, setId] = useState("");
    const [showLoader, setShowLoader] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const { userName: uName, room, setRoom, setUserName } = props;
    const userName = nameFormatter(uName);

    const socket = socketIO(ENDPOINT, {
        transports: ["websocket"],
    });

    const toggleModal = () => {
        setIsModalOpen((e) => !e);
    };

    useEffect(() => {
        if (messages.length > 0) setShowLoader(false);
    }, [messages]);

    const sendMessage = () => {
        if (messageRef.current.value.trim().length === 0) return;
        socket.emit("message", {
            id,
            room,
            message: messageRef.current.value,
            time: timeFormatter(new Date()),
        });
        messageRef.current.value = "";
    };

    useEffect(() => {
        socket.emit("joinRoom", { room, userName });

        socket.on("getId", ({ id }) => setId(id));

        socket.on("welcomeMessage", ({ id, userName, message, type }) =>
            setMessages((i) => [...i, { id, type, userName, message }])
        );

        socket.on("userJoined", ({ id, type, userName, message }) =>
            setMessages((i) => [...i, { id, type, userName, message }])
        );

        socket.on("userLeft", ({ id, type, userName, message }) => {
            setMessages((i) => [...i, { id, type, userName, message }]);
        });

        socket.on("receiveMessage", ({ id, type, message, userName, time }) =>
            setMessages((i) => [...i, { id, type, userName, message, time }])
        );

        return () => socket.off();
    }, []);

    if (showLoader) return <Loader />;

    return (
        <div className="w-screen h-screen flex flex-col justify-between lg:w-[65%] lg:mx-auto">
            <ChatHeader room={room} toggleModal={toggleModal} />
            {isModalOpen && (
                <Modal
                    id={id}
                    room={room}
                    socket={socket}
                    setRoom={setRoom}
                    setUserName={setUserName}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
            <ChatBody id={id} messages={messages} />
            <ChatInput
                id={id}
                room={room}
                messageRef={messageRef}
                sendMessage={sendMessage}
                socket={socket}
            />
        </div>
    );
}

export default Chat;
