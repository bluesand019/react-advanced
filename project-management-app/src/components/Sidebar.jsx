import React from "react";

const Sidebar = ({ setIsAddProject, projects }) => {

  const handleAddProject = () => {
    setIsAddProject(true);
  }
  return (
    <div className="sidebar">
      <h1>YOUR PROJECTS</h1>
      <button className="add-project-btn" onClick={handleAddProject}>
        + Add Project
      </button>
      <ul>
        {projects.map(element => {
           return <li key={element.id}><button className="project-title-btn">{element.title}</button></li>
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
