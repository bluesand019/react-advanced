import React, { useRef, useState } from "react";

const Tasks = ({ projects, projectId, setProjects }) => {
  const [tasks, setTasks] = useState([]);
  const taskRef = useRef();

  const handleTasks = (projectID) => {
    const newTask = {
      projectID: projectID,
      id: Date.now() + "",
      title: taskRef.current.value,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    taskRef.current.value = "";
  };

  const handleClearTask = (taskId) => {
    setTasks(
      tasks.filter((element) => {
        return element.id !== taskId;
      }),
    );
  };

  const handleDeleteProject = (projectId) => {
    setProjects(
      projects.filter(element => {
        return element.id !== projectId;
      })
    )
  }
  return (
    <div>
      {projects.map((element) => {
        if (element.id === projectId) {
          return (
            <div className="tasks-container">
              <div className="title-container">
              <h1>{element.title}</h1>
              <button onClick={()=>handleDeleteProject(element.id)}>Delete</button>
              </div>
              <p>{element.date}</p>
              <p>{element.description}</p>
              <hr />
              <div className="tasks">
                <label>Tasks</label> <br />
                <input type="text" ref={taskRef} />
                <button onClick={()=>handleTasks(element.id)}>Add Task</button>
                <div className="task-list">
                  <ul>
                    {tasks.map(item => {
                      if(item.projectID===element.id) {
                          return (
                        <li className="each-task" key={item.id}>
                          {item.title}
                          <button onClick={() => handleClearTask(item.id)}>
                            Clear
                          </button>
                        </li>
                      );
                      }
                    })}
                  
                  </ul>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Tasks;
