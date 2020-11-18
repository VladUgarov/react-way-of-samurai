let rerenderEntireTree = () => {
  console.log("State chacged");
};

let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
