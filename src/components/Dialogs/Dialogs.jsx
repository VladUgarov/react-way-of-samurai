import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Vlad" id="1" />
        <DialogItem name="Roman" id="2" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi" />
        <Message message="I am pidor" />
      </div>
    </div>
  );
};

export default Dialogs;
