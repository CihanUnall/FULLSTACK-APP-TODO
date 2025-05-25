"use client";

import { useState } from "react";
import "../styles/addtodo.scss";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <div className="add-todo-container">
      <input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
