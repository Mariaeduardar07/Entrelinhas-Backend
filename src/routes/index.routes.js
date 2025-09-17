import express from "express";

// Importar todas as rotas
import authorRouter from "./authorRoutes.js";

const router = express.Router();

// Rotas públicas
router.use("/author", authorRouter);

export default router;
