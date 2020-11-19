const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
      ]
    }
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscrber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscrber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default store;
