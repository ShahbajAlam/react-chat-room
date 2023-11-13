import { Comment } from "react-loader-spinner";

function Loader() {
    return (
        <div className="loader">
            <Comment
                width={100}
                height={100}
                ariaLabel="comment-loading"
                color="#fff"
                backgroundColor="#F4442E"
            />
        </div>
    );
}

export default Loader;
