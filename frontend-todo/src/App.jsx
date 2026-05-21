import { useState, useEffect } from 'react'
import './App.css'
import { CreateTodo } from './component/CreateTodo'
import { Todos } from './component/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  const [loading ,setLoading]=useState(true);


  async function fetchTodos() {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:3000/todos");
      const json = await response.json();

      setTodos(json.todos);
    } catch (err) {
      console.error(err);
    } 
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-cyan-400">
          MERN Todo App
        </h1>

        <CreateTodo refreshTodos={fetchTodos} />

        {loading ? (
          <h2 className="text-center text-xl mt-8">Loading...</h2>
        ) : (
          <Todos todos={todos} refreshTodos={fetchTodos} />
        )}
      </div>
    </div>
  );
}

export default App;