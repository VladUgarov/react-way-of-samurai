import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message="hi, how are you?" likesCount="0" />
        <Post message="it's my first post" likesCount="23" />
      </div>
    </div>
  );
};

export default MyPosts;
