import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhy_b4VIS5weweOfs2CH1xjoPYAG_NYzpryg&usqp=CAU"></img>
        {props.message}
        <div>
          <span>Like</span> {props.likesCount}
        </div>
      </div>
    </div>
  );
};
export default Post;
