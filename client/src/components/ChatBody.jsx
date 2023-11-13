import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";

function ChatBody({ id, messages }) {
    return (
        <ScrollToBottom
            initialScrollBehavior="smooth"
            className="w-screen h-[76%] bg-transparent p-4 md:px-10 md:py-8 lg:w-full lg:p-2"
        >
            {messages.map((message, i) => (
                <Message
                    key={i}
                    currID={id}
                    id={message.id}
                    time={message.time}
                    type={message.type}
                    userName={message.userName}
                    message={message.message}
                />
            ))}
        </ScrollToBottom>
    );
}

export default ChatBody;
