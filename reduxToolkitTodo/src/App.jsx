import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-gray-900 text-white">
      <div className="w-full max-w-xl p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6 tracking-tight">
          🧠 Modern Redux Todo
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;