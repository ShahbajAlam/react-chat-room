function ChatInput({ messageRef, sendMessage }) {
    return (
        <div className="h-[12%] bg-[#223749] flex justify-between items-center px-4 py-2 rounded-[2rem] rounded-bl-none rounded-br-none md:px-16 md:py-6">
            <input
                type="text"
                ref={messageRef}
                onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage();
                }}
                placeholder="Type your message..."
                className="w-[85%] rounded-3xl border-solid border-gray-500 border-[1px] outline-none px-4 py-2 text-xl bg-transparent placeholder:text-gray-500 caret-gray-500 text-gray-200 md:w-[80%] md:py-4 md:text-2xl md:placeholder:text-2xl md:rounded-full lg:text-lg lg:placeholder:text-lg lg:py-2 lg:flex lg:justify-center"
            />
            <button
                className="w-[15%] rounded-md border-none outline-none p-2 text-center"
                onClick={sendMessage}
            >
                <img
                    src="sendicon.png"
                    alt="send icon"
                    className="w-[100%] ms-auto md:w-[70%] lg:w-[40%] lg:mx-auto"
                />
            </button>
        </div>
    );
}

export default ChatInput;
