"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import "../styles/todos.scss";

export default function TodoPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Kullanıcı yoksa yönlendir
  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      fetchTodos();
    }
  }, [user, router]);

  // Todo'ları çek
  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:5500/todos");
      if (!res.ok) throw new Error("Failed to fetch todos");
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
      alert("Could not load todos");
    } finally {
      setLoading(false);
    }
  };

  // Yeni todo ekle
  const addTodo = async (text) => {
    try {
      const res = await fetch("http://localhost:5500/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error("Failed to add todo");
      const newTodo = await res.json();
      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.error(error);
      alert("Failed to add todo");
    }
  };

  // Todo tamamlandı bilgisi güncelle
  const toggleTodo = async (id) => {
    try {
      const todo = todos.find((t) => t.id === id);
      const res = await fetch(`http://localhost:5500/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ done: !todo.done }),
      });
      if (!res.ok) throw new Error("Failed to toggle todo");
      const updated = await res.json();
      setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
    } catch (error) {
      console.error(error);
      alert("Failed to toggle todo");
    }
  };

  // Metin güncelle
  const updateTodoText = async (id, newText) => {
    try {
      const res = await fetch(`http://localhost:5500/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newText }),
      });
      if (res.ok) {
        const updated = await res.json();
        setTodos((prev) =>
          prev.map((todo) => (todo.id === id ? updated : todo))
        );
      }
    } catch (err) {
      console.error("Edit failed", err);
    }
  };

  // Sil
  const deleteTodo = async (id) => {
    try {
      const res = await fetch(`http://localhost:5500/todos/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete todo");
      setTodos((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete todo");
    }
  };

  if (!user) return null;
  if (loading) return <p>Loading todos...</p>;

  return (
    <div className="todo-page">
      <h2>
        Welcome to your Todo list, <span>{user.username}!</span>
        <hr />
      </h2>
      <AddTodo onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={updateTodoText}
      />
    </div>
  );
}
