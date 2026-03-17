import React from "react";

const Tasks = ({ projects, projectId }) => {
  return (
    <div>
      {projects.map((element) => {
        if (element.id === projectId) {
          return (
            <div className="tasks-container">
              <h1>{element.title}</h1>
              <p>{element.date}</p>
              <p>{element.description}</p>
              <hr />
              <div className="tasks">
                <label>Tasks</label> <br />
                <input type="text" />
                <button>Add Task</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Tasks;
