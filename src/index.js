import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let posts = [
  { id: 1, message: "hi, how are you?", likesCount: 12 },
  { id: 2, message: "it's my first post", likesCount: 23 }
];

let dialogs = [
  { id: 1, name: "Vlad" },
  { id: 2, name: "Roman" }
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Roman Pidor" }
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById("root")
);
