import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setEditingId(null);
      setEditText("");
    }
  };

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between bg-white/10 border border-white/20 rounded-lg px-4 py-3 transition hover:shadow-md"
        >
          <div className="flex-1">
            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => handleUpdate(todo.id)}
                onKeyDown={(e) => e.key === "Enter" && handleUpdate(todo.id)}
                autoFocus
                className="w-full bg-transparent border-b border-indigo-500 text-white outline-none"
              />
            ) : (
              <span className="text-white">{todo.text}</span>
            )}
          </div>

          <div className="flex gap-3 ml-4">
            {/* Edit Icon */}
            <button
              onClick={() => startEditing(todo)}
              className="text-indigo-400 hover:text-indigo-600 transition"
              title="Edit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5h2m-1 0v14m-7-7h14"
                />
              </svg>
            </button>

            {/* Delete Icon */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-400 hover:text-red-600 transition"
              title="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todos;