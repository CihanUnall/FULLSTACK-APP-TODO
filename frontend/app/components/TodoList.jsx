"use client";
import { useState } from "react";
import "../styles/todolist.scss";

export default function TodoList({ todos, onDelete, onToggle, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    if (editText.trim() === "") return;
    onEdit(id, editText); // Backend'e gönder
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="todolist-container">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggle(todo.id)}
            />

            {editingId === todo.id ? (
              <>
                <div className="edit-todo">
                  <textarea
                    className="edit-area"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={() => saveEdit(todo.id)}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p className={todo.done ? "completed" : ""}>{todo.text}</p>
                <button onClick={() => startEdit(todo)}>Edit</button>
              </>
            )}

            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
