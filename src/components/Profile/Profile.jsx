import React from "react";
import MyPosts from "./MyPosts/MyPost";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" />
      </div>
      <div>ava+ description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
