import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import JoinPage from "./components/JoinPage";
import Chat from "./components/Chat";

function App() {
    const [userName, setUserName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div className="w-screen app bg-gradient-to-b from-[#4B79A1] to-[#283E51] flex justify-center items-center">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <JoinPage
                                setRoom={setRoom}
                                setUserName={setUserName}
                            />
                        }
                    />
                    <Route
                        path="chat"
                        element={
                            !userName || !room ? (
                                <Navigate to="/" />
                            ) : (
                                <Chat
                                    room={room}
                                    setRoom={setRoom}
                                    userName={userName}
                                    setUserName={setUserName}
                                />
                            )
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
