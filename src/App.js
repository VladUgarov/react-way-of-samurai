import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs dialogs={props.dialogs} messages={props.messages} />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile posts={props.posts} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
