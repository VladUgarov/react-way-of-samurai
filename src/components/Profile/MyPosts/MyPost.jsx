import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>remove</button>
      </div>
      <div className="posts">
        <Post message="hi, how are you?" likesCount="0" />
        <Post message="it's my first post" likesCount="23" />
      </div>
    </div>
  );
};

export default MyPosts;
