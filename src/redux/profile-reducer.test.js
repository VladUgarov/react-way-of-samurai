import React from "react";
import profileReducer, {
  addPostActionCreator,
  deletePost
} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 }
  ]
};

it("lenht of post should be incremented", () => {
  let action = addPostActionCreator("San9 sosi");

  let newState = profileReducer(state, action);

  expect(newState.posts[4].message).toBe(5);
});

it("message of new post should be corrcet ", () => {
  let action = addPostActionCreator("San9 sosi");

  let newState = profileReducer(state, action);

  expect(newState.posts.message).toBe("San9 sosi");
});

it("after delteing lenght os messages should be decremnet", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.lenght).toBe(3);
});

it("after delteing lenght shouldn't be decremnet if incorrect", () => {
  let action = deletePost(1000);

  let newState = profileReducer(state, action);

  expect(newState.posts.lenght).toBe(4);
});
