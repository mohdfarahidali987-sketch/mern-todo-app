export function Todos({ todos, refreshTodos }) {
  async function markCompleted(id) {
    try {
      await fetch("http://localhost:3000/completed", {
        method: "PUT",
        body: JSON.stringify({
          id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      refreshTodos();
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteTodo(id) {
    try {
      await fetch(`http://localhost:3000/todo/${id}`, {
        method: "DELETE",
      });

      refreshTodos();
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="mt-8 space-y-4">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="bg-gray-800 p-5 rounded-2xl shadow-lg"
        >
          <h1 className="text-2xl font-bold text-cyan-300">
            {todo.title}
          </h1>

          <p className="text-gray-300 mt-2">
            {todo.description}
          </p>

          <div className="flex gap-4 mt-5">
            <button
              onClick={() => markCompleted(todo._id)}
              disabled={todo.completed}
              className={`px-4 py-2 rounded-xl font-semibold ${
                todo.completed
                  ? "bg-green-600"
                  : "bg-yellow-500 hover:bg-yellow-600"
              }`}
            >
              {todo.completed ? "Completed" : "Mark Completed"}
            </button>

            <button
              onClick={() => deleteTodo(todo._id)}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl font-semibold"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}