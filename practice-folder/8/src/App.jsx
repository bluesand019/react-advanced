import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import TaskStats from './components/TaskStats';
import WeatherGreeting from './components/WeatherGreeting';
import FocusTimer from './components/FocusTimer';
import MoodTracker from './components/MoodTracker';
import EditModal from './components/EditModal';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // Track the task being edited

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: newText } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px' }}>
      <WeatherGreeting />
      
      <h1>My Tasks</h1>
      <TaskInput onAddTask={addTask} />
      
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onDelete={deleteTask} 
          onEdit={(task) => setEditingTask(task)} 
        />
      ))}

      {/* The Modal Logic */}
      {editingTask && (
        <EditModal 
          isOpen={!!editingTask} 
          task={editingTask} 
          onClose={() => setEditingTask(null)} 
          onSave={updateTask} 
        />
      )}

      <TaskStats totalTasks={tasks.length} onClearAll={() => setTasks([])} />
      <FocusTimer />
      <MoodTracker />
    </div>
  );
}

export default App;