// controllers/usersController.js
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/users.json");

const readUsers = async () => {
  const data = await fs.readFile(dataPath, "utf-8");
  return JSON.parse(data);
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const users = await readUsers();

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ user, token: "cihan-token" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
