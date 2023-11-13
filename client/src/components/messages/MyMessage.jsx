function MyMessage({ message, userName, time }) {
    return (
        <div className="w-fit max-w-[80%] ms-auto text-lg font-semibold mb-1 message_animation md:text-2xl md:py-1">
            <div className="bg-gradient-to-r from-[#8de9d5] to-[#32c4c0] px-4 py-1 rounded-3xl rounded-br-none text-gray-900 lg:text-base lg:px-6">
                <p className="text-xs font-medium md:text-lg lg:text-sm">
                    {userName.split(" ")[0]}
                </p>
                <p className="break-words">{message}</p>
            </div>
            <p className="text-right text-xs text-gray-50 font-light">{time}</p>
        </div>
    );
}

export default MyMessage;
