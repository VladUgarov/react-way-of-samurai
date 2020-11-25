import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "hi, how are you?", likesCount: 12 },
        { id: 2, message: "it's my first post", likesCount: 23 }
      ],
      newPostText: "it-kamasutra"
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Roman Pidor" }
      ],
      dialogs: [
        { id: 1, name: "Vlad" },
        { id: 2, name: "Roman" }
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscrber() {
    console.log("State chacged");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscrber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscrber(this._state);
  }
};

export default store;
