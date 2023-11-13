import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

import JoinRoomButton from "./buttons/JoinRoomButton";
import UserNameInput from "./UserNameInput";
import RoomNumberInput from "./RoomNumberInput";

function JoinPage({ setUserName, setRoom }) {
    const userNameRef = useRef(null);
    const roomRef = useRef(null);

    function errorToast() {
        toast.error("Enter both name and room number", {
            duration: 3000,
            id: "inputerror",
            position: "top-center",
            style: {
                borderRadius: "2rem",
                fontWeight: "bold",
                textAlign: "center",
            },
        });
    }

    function reset() {
        userNameRef.current.value = "";
        roomRef.current.value = "";
    }

    function handleLogin(e) {
        if (!userNameRef.current.value || !roomRef.current.value) {
            e.preventDefault();
            errorToast();
            return;
        }
        setUserName(userNameRef.current.value);
        setRoom(+roomRef.current.value);
        reset();
    }

    return (
        <div className="w-[85%] min-h-[18rem] bg-gradient-to-b from-[#d3cce3] to-[#e9e4f0] flex flex-col items-center justify-center rounded-xl px-2 md:w-[70%] md:min-h-[25rem] md:px-10 lg:w-[50%]">
            <Toaster />
            <div className="mb-8 flex justify-center items-center">
                <img
                    src="logo.png"
                    alt="React Logo"
                    className="w-[2.25rem] h-[2.25rem] me-2 md:w-[4rem] md:h-[4rem] md:me-8"
                />
                <div className="bg-clip-text bg-gradient-to-r from-[#c94b4b] to-[#4b134f]">
                    <h1 className="text-[2.8rem] font-sans text-center font-semibold text-transparent md:text-[3.5rem]">
                        Chat Room
                    </h1>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <UserNameInput userNameRef={userNameRef} />
                <RoomNumberInput roomRef={roomRef} />
                <JoinRoomButton handleLogin={handleLogin} />
            </div>
        </div>
    );
}

export default JoinPage;
