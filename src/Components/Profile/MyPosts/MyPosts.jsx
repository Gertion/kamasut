import React from 'react';
import posts from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () =>{
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={posts.postsBlock}>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <h3>My posts</h3>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                    <button >Remove post</button>
                </div>
            </div>

            <div className={posts.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;