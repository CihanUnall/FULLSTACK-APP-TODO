// Nereden nereye gidileceğini belirler.
// GET /apartman/daire/5
// Bu, "5 numaralı daireyi ziyaret et" anlamına gelen bir "route"dur.

import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const router = express.Router();
router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;

// Bu dosya, todo ile ilgili tüm route'ları tanımlar.
