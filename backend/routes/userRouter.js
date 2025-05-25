// Nereden nereye gidileceğini belirler.
// GET /apartman/daire/5
// Bu, "5 numaralı daireyi ziyaret et" anlamına gelen bir "route"dur.

import express from "express";

import { loginUser } from "../controllers/usersController.js";

const router = express.Router();

router.post("/login", loginUser);

export default router;

// Bu dosya, todo ile ilgili tüm route'ları tanımlar.
