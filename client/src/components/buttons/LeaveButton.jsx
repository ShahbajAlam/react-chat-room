function LeaveButton({ toggleModal }) {
    return (
        <button onClick={toggleModal}>
            <img
                src="leave.png"
                alt="leave"
                className="w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] lg:w-[3rem] lg:h-[3rem]"
            />
        </button>
    );
}

export default LeaveButton;
