import React from "react";
import logo from "../assets/no-projects.png";

const Home = () => {
  return (
    <div className="home">
      <div className="image">
        <img src={logo} alt="" />
      </div>
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one</p>
      <div className="btn">
        <button className="add-project-btn">Create new project</button>
      </div>
    </div>
  );
};

export default Home;
