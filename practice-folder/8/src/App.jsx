import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import TaskStats from './components/TaskStats';
import WeatherGreeting from './components/WeatherGreeting';
import FocusTimer from './components/FocusTimer';
import MoodTracker from './components/MoodTracker';
import EditModal from './components/EditModal';
import SearchFilter from './components/SearchFilter';
import { useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('my-tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem('my-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: newText } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => 
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px' }}>
      <WeatherGreeting />
      
      <h1>My Tasks</h1>
      <TaskInput onAddTask={addTask} />
      
      <SearchFilter 
        searchTerm={searchQuery} 
        onSearchChange={setSearchQuery} 
      />
      
      <div style={{ minHeight: '150px' }}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onDelete={deleteTask} 
              onEdit={setEditingTask} 
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#888' }}>
            {tasks.length > 0 ? "No matches found." : "No tasks yet!"}
          </p>
        )}
      </div>

      <TaskStats totalTasks={tasks.length} onClearAll={() => setTasks([])} />
      
      {editingTask && (
        <EditModal 
          task={editingTask} 
          onClose={() => setEditingTask(null)} 
          onSave={updateTask} 
        />
      )}

      <FocusTimer />
      <MoodTracker />
    </div>
  );
}

export default App;