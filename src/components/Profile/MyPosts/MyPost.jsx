import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "hi, how are you?", likesCount: 12 },
    { id: 2, message: "it's my first post", likesCount: 23 }
  ];

  let postElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

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
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
