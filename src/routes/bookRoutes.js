import express from "express";
import BookController from "../controllers/bookController.js";

const bookRouter = express.Router();

// Rotas de livros
// GET /livros - Listar todos os livros
bookRouter.get("/", BookController.getAllBooks);

// GET /livros/:id - Obter um livro pelo ID
bookRouter.get("/:id", BookController.getBookById);

// POST /livros - Criar um novo livro
bookRouter.post("/", BookController.createBook);

// PUT /livros/:id - Atualizar um livro
bookRouter.put("/:id", BookController.updateBook);

// DELETE /livros/:id - Remover um livro
bookRouter.delete("/:id", BookController.deleteBook);

export default bookRouter;