import React from "react";
import MyPosts from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
