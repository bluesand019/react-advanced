import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import TaskStats from './components/TaskStats';

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
    if (window.confirm("Are you sure you want to delete everything?")) {
      setTasks([]);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h1>My Tasks</h1>
      <TaskInput onAddTask={addTask} />
      
      {tasks.length === 0 ? (
        <p>No tasks yet. Enjoy your day!</p>
      ) : (
        tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDelete={deleteTask} 
          />
        ))
      )}

      <TaskStats 
        totalTasks={tasks.length} 
        onClearAll={clearAllTasks} 
      />
    </div>
  );
}

export default App;