import express from "express";

// Importar todas as rotas
import authorRouter from "./authorRoutes.js";
import curiosityRouter from "./curiosityRoutes.js";
import bookRouter from "./bookRoutes.js";
import characterRouter from "./characterRoutes.js";

const router = express.Router();

// Rotas públicas
router.use("/autor", authorRouter);
router.use("/curiosidade", curiosityRouter);
router.use("/livro", bookRouter);
router.use("/personagem", characterRouter);

export default router;