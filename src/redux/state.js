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
  getState() {
    return this._state;
  },
  _callSubscrber() {
    console.log("State chacged");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscrber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscrber(this._state);
  },
  subscribe(observer) {
    this._callSubscrber = observer;
  }
};

export default store;
