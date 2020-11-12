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
        <Post message="hi, how are you?" />
        <Post message="it's my first post" />
      </div>
    </div>
  );
};

export default MyPosts;
