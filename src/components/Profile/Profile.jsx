import React from "react";
import MyPosts from "./MyPosts/MyPost";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" />
      </div>
      <div>ava+ description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
