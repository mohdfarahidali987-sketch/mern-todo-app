import { useState } from "react";

export function CreateTodo({ refreshTodos }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    async function addTodo() {
        if (!title.trim() || !description.trim()) {
            alert("Please fill all fields");
            return;
        }

        try {
            setLoading(true);

            await fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    description,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setTitle("");
            setDescription("");

            refreshTodos();

            alert("Todo Created Successfully");
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
                Create Todo
            </h2>

            <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 mb-4 outline-none"
            />

            <textarea
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 mb-4 outline-none"
            />

            <button
                onClick={addTodo}
                disabled={loading}
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition-all"
            >
                {loading ? "Adding..." : "Add Todo"}
            </button>
        </div>
    );
}


