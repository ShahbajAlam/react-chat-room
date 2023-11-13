import { Link } from "react-router-dom";

function JoinRoomButton({ handleLogin }) {
    return (
        <Link
            to="chat"
            className="w-[95%] rounded-md border-none outline-none p-2 bg-gradient-to-r from-green-600 to-green-800 text-xl font-semibold text-center text-gray-50 md:text-2xl md:py-3 lg:text-xl"
            onClick={handleLogin}
        >
            <button>Join Room</button>
        </Link>
    );
}

export default JoinRoomButton;
