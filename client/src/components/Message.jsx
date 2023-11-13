import MyMessage from "./messages/MyMessage";
import TheirMessage from "./messages/TheirMessage";
import UserJoined from "./messages/UserJoined";
import UserLeft from "./messages/UserLeft";
import Welcome from "./messages/Welcome";

function Message({ id, type, message, userName, currID, time }) {
    if (type === "welcome") return <Welcome message={message} />;
    if (type === "left") return <UserLeft message={message} />;
    if (type === "joined") return <UserJoined message={message} />;
    if (currID === id)
        return <MyMessage message={message} userName={userName} time={time} />;
    return <TheirMessage message={message} userName={userName} time={time} />;
}

export default Message;
