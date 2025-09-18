import express from "express";

// Importar todas as rotas
import authorRouter from "./authorRoutes.js";
import bookRouter from "./bookRoutes.js";


const router = express.Router();

// Rotas públicas
router.use("/author", authorRouter);
router.use("/book", bookRouter);

export default router;
