import { Link } from "react-router-dom";

function Modal({ id, socket, setIsModalOpen, room, setRoom, setUserName }) {
    const toggleModal = () => {
        setIsModalOpen((e) => !e);
    };

    const userLeft = () => {
        socket.emit("disconnected", { id, room });
        setRoom("");
        setUserName("");
    };

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-[4px] z-[1] flex justify-center items-center">
            <div className="w-[70%] h-[12rem] px-4 py-6 bg-gray-300 flex flex-col items-center justify-around rounded-2xl md:w-[50%] lg:w-[30%]">
                <h1 className="text-2xl text-center font-bold px-2">
                    Do you want to leave the room?
                </h1>
                <div className="w-full flex justify-around items-center">
                    <button
                        className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-gray-50 cursor-pointer rounded-md font-semibold text-lg"
                        onClick={toggleModal}
                    >
                        NO
                    </button>
                    <Link
                        to="/"
                        className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-800 text-gray-50 cursor-pointer rounded-md font-semibold text-lg"
                    >
                        <button onClick={userLeft}>YES</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Modal;
