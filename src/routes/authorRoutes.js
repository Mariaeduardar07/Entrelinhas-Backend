import express from "express";
import AuthorController from "../controllers//authorController.js";

const authorRouter = express.Router();

// Rotas de Autores
// GET /autores - Listar todos os Autores
authorRouter.get("/", AuthorController.getAllAuthors);

// PUT /autor/:id - Atualizar um Autor
authorRouter.put("/:id", AuthorController.updateAuthor);

// POST /autor - Criar um novo Autor
authorRouter.post("/", AuthorController.createAuthor);

// PUT /autor/:id - Atualizar um Autor
authorRouter.put("/:id", AuthorController.updateAuthor);

// DELETE /autor/:id - Remover um Autor
authorRouter.delete("/:id", AuthorController.deleteAuthor);


export default authorRouter;
