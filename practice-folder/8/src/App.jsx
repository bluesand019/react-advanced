import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import TaskStats from './components/TaskStats';
import WeatherGreeting from './components/WeatherGreeting';
import FocusTimer from './components/FocusTimer';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearAllTasks = () => {
    if (window.confirm("Start fresh?")) setTasks([]);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px' }}>
      <WeatherGreeting />
      
      <div style={{ minHeight: '300px' }}>
        <h1>My Tasks</h1>
        <TaskInput onAddTask={addTask} />
        
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={deleteTask} />
        ))}
        
        <TaskStats totalTasks={tasks.length} onClearAll={clearAllTasks} />
      </div>

      <FocusTimer />
    </div>
  );
}

export default App;