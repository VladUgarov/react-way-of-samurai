import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

  return (
    <div>
      <div>
        <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" />
      </div>
      <div className={classes.descriptionBlock}>
          <img src={props.profile.photos.large}/>
          ava+ description
      </div>
    </div>
  );
};

export default ProfileInfo;
