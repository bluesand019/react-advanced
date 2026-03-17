import React, { useRef, useState } from "react";

const Tasks = ({ projects, projectId }) => {
  const [tasks, setTasks] = useState([]);
  const taskRef = useRef();

  const handleTasks = () => {
    const newTask = {
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
                <input type="text" ref={taskRef} />
                <button onClick={handleTasks}>Add Task</button>
                <div className="task-list">
                  <ul>
                    {tasks.map((element) => {
                      return (
                        <li className="each-task" key={element.id}>
                          {element.title}
                          <button onClick={() => handleClearTask(element.id)}>
                            Clear
                          </button>
                        </li>
                      );
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
