import React from "react";
import { connect } from "react-redux";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageCreator());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
