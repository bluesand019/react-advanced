import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [isAddProject, setIsAddProject] = useState(false);
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
      description: "Random desc",
      date: "12-11-2003",
    },
  ]);
  return (
    <div className="app">
      <Sidebar setIsAddProject={setIsAddProject} projects={projects} />
      {isAddProject ? (
        <Form setProjects={setProjects} setIsAddProject={setIsAddProject} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
