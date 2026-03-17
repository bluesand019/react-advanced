import React from "react";

const Sidebar = ({ setIsAddProject, projects, setIsTasks, setProjectId }) => {
  const handleAddProject = () => {
    setIsAddProject(true);
  };
  const showTasks = (projectId) => {
    setIsTasks(true);
    setProjectId(projectId);
  }
  return (
    <div className="sidebar">
      <h1>YOUR PROJECTS</h1>
      <button className="add-project-btn" onClick={handleAddProject}>
        + Add Project
      </button>
      <ul>
        {projects.map((element) => {
          return (
            <li key={element.id}>
              <button className="project-title-btn" 
                onClick={() => showTasks(element.id)}
              >{element.title}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
