import express from "express";
import CuriosityController from "../controllers/curiosityController.js";

const curiosityRouter = express.Router();

// Rotas de curiosidades
// GET /curiosidades - Listar todas as curiosidades
curiosityRouter.get("/", CuriosityController.getAllCuriosities);

// GET /curiosidades/:id - Obter uma curiosidade pelo ID
curiosityRouter.get("/:id", CuriosityController.getCuriosityById);

// POST /curiosidades - Criar uma nova curiosidade
curiosityRouter.post("/", CuriosityController.createCuriosity);

// PUT /curiosidades/:id - Atualizar uma curiosidade
curiosityRouter.put("/:id", CuriosityController.updatedCuriosity);

// DELETE /curiosidades/:id - Remover uma curiosidade
curiosityRouter.delete("/:id", CuriosityController.deleteCuriosity);

export default curiosityRouter;