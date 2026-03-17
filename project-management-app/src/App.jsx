import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import { useRef, useState } from "react";

function App() {
  const [isAddProject, setIsAddProject] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [isTasks, setIsTasks] = useState(false);
  const [projects, setProjects] = useState([]);

  const showWindow = () => {
    if (isAddProject) {
      return (
        <Form
          setProjects={setProjects}
          setIsAddProject={setIsAddProject}
          setIsTasks={setIsTasks}
        />
      );
    } else {
      if (isTasks) {
        return (
          <Tasks
            setProjects={setProjects}
            projects={projects}
            projectId={projectId}
            setIsAddProject={setIsAddProject}
          />
        );
      } else return <Home />;
    }
  };

  return (
    <div className="app">
      <Sidebar
        setIsAddProject={setIsAddProject}
        projects={projects}
        setIsTasks={setIsTasks}
        setProjectId={setProjectId}
      />
      {showWindow()}
    </div>
  );
}

export default App;
