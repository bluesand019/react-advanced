import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import { useRef, useState } from "react";

function App() {
  const [isAddProject, setIsAddProject] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [isTasks, setIsTasks] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: "123",
      title: "title 1",
      description: "Random desc",
      date: "12-11-2003",
    },
    {
      id: "1234",
      title: "title 2",
      description: "Random desc-2",
      date: "12-11-2006",
    },
  ]);

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
        return <Tasks projects={projects} projectId={projectId} />;
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
