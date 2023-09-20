import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css';


const Posts = () => {
    // get data in posts
    const posts = useLoaderData();
    return (
        <div>
            <h2>Posts: {posts.length}</h2>

            <div className="post-container">
                {
                    /* loop post every data */
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>

        </div>
    )
}

export default Posts;