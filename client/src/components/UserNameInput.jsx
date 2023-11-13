function UserNameInput({ userNameRef }) {
    return (
        <input
            type="text"
            ref={userNameRef}
            placeholder="Enter your name..."
            className="w-[95%] rounded-md outline-none p-2 text-xl bg-gray-300 mb-4 text-gray-800 placeholder:text-gray-600 border-l-[5px] border-l-green-500 font-semibold md:mb-6 md:px-4 md:py-3 md:text-2xl lg:text-xl"
        />
    );
}

export default UserNameInput;
