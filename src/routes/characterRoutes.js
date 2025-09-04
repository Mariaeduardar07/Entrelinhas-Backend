import express from "express";
import CharacterController from "../controllers/characterController.js";

const characterRouter = express.Router();

// Rotas de personagens
// GET /personagens - Listar todos os personagens
characterRouter.get("/", CharacterController.getAllCharacters);

// GET /personagens/:id - Obter um personagem pelo ID
characterRouter.get("/:id", CharacterController.getCharacterById);

// POST /personagens - Criar um novo personagem
characterRouter.post("/", CharacterController.createCharacter);

// PUT /personagens/:id - Atualizar um personagem
characterRouter.put("/:id", CharacterController.updatedCharacter);

// DELETE /personagens/:id - Remover um personagem
characterRouter.delete("/:id", CharacterController.deleteCharacter);

export default characterRouter;