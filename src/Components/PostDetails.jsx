
const PostDetails = () => {
    const post = useLoaderDetails();
    const {id, title, body } = post;

    return (
        <div>
            <h3>Post Details about: {id} </h3>
            <p>Title: {title} </p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;