import express from "express";

// Importar todas as rotas
import authorRouter from "./authorRoutes.js";
import curiosityRouter from "./curiosityRoutes.js";

const router = express.Router();

// Rotas públicas
router.use("/autor", authorRouter);
router.use("/curiosidade", curiosityRouter);

export default router;