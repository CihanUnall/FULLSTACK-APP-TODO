//İçeride ne yapılacağını belirleyen kişi.
//Misafir daireye geldi. Ev sahibi (controller) ona çay ikram eder, konuşur, belki yemek sunar.
// Middleware, kapıda güvenlik görevlisi gibi. Kapıda durur, kimin geldiğini kontrol eder.
//function visitDaire5(req, res) {
//   res.send("Hoş geldiniz! Çay ister misiniz?");
// }
// import users from '../data/users.json' with { type: 'json' };
// import todos from '../data/todos.json' with { type: 'json' };

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// JSON dosyasının yolunu çöz
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/todos.json");

// JSON dosyasını oku
const readTodos = async () => {
  const data = await fs.readFile(dataPath, "utf-8");
  return JSON.parse(data);
};

// JSON dosyasına yaz
const writeTodos = async (todos) => {
  await fs.writeFile(dataPath, JSON.stringify(todos, null, 2));
};

export const getTodos = async (req, res) => {
  const todos = await readTodos();
  res.json(todos);
};

export const createTodo = async (req, res) => {
  const todos = await readTodos();
  const { text } = req.body;
  const lastId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) : 0;
  const newTodo = {
    id: lastId + 1,
    text,
    done: false,
  };

  todos.push(newTodo);
  await writeTodos(todos);
  res.status(201).json(newTodo);
};

export const updateTodo = async (req, res) => {
  const todos = await readTodos();
  const { id } = req.params;
  const { text, done } = req.body;
  const todo = todos.find((t) => t.id == id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  if (text !== undefined) todo.text = text;
  if (done !== undefined) todo.done = done;

  await writeTodos(todos);
  res.json(todo);
};

export const deleteTodo = async (req, res) => {
  let todos = await readTodos();
  const { id } = req.params;
  todos = todos.filter((t) => t.id != id);
  await writeTodos(todos);
  res.status(204).send();
};
