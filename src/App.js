import React from "react";
import "./styles.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
};

export default App;
