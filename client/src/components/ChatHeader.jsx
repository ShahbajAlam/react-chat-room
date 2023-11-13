import LeaveButton from "./buttons/LeaveButton";

function ChatHeader({ room, toggleModal }) {
    return (
        <div className="h-[12%] flex justify-between items-center p-4 bg-[#375a79] rounded-[2rem] rounded-tl-none rounded-tr-none md:px-16 md:py-6 lg:p-6">
            <img
                src="logo.png"
                alt="logo"
                className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] lg:w-[3rem] lg:h-[3rem]"
            />
            <h1 className="text-2xl font-semibold text-gray-200 md:text-3xl lg:text-2xl">
                Room : {room}
            </h1>
            <LeaveButton toggleModal={toggleModal} />
        </div>
    );
}

export default ChatHeader;
