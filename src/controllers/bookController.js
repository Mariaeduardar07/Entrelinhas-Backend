import BookModel from "../models/bookModel.js";

class BookController {
  // GET /livros
  async getAllBooks(req, res) {
    try {
      const livros = await BookModel.findAll();
      res.json(livros);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
      res.status(500).json({ error: "Erro ao buscar livros" });
    }
  }

  // GET /livros/:id
  async getBookById(req, res) {
    try {
      const { id } = req.params;

      const livro = await BookModel.findById(id);

      if (!livro) {
        return res.status(404).json({ error: "Livro não encontrado!" });
      }

      res.json(livro);
    } catch (error) {
      console.error("Erro ao buscar livro:", error);
      res.status(500).json({ error: "Erro ao buscar livro!" });
    }
  }

  // POST /livros
  async createBook(req, res) {
    try {
      // Captura dos dados do corpo da requisição (frontend)
      const { name, imageUrl, summary, authorId } = req.body;

      // Verifica se todos os campos da livro foram fornecidos
      if (!name || !imageUrl || !summary || !authorId) {
        return res.status(400).json({
          error:
            "Os campos nome, imagem, resumo e id do autor são obrigatórios",
        });
      }

      // Criar a nova livro
      const newBook = await BookModel.create(
        name,
        imageUrl,
        summary,
        authorId
      );

      if (!newBook) {
        return res.status(400).json({ error: "Erro ao criar livro" });
      }

      res.status(201).json({
        message: "Livro criado com sucesso",
        newBook,
      });
    } catch (error) {
      console.error("Erro ao criar livro:", error);
      res.status(500).json({ error: "Erro ao criar livro" });
    }
  }

  // PUT /livros/:id
  async updateBook(req, res) {
    try {
      const { id } = req.params;
      const { name, imageUrl, summary, authorId} = req.body;

      // Atualizar o Livro
      const updatedBook = await BookModel.update(
        id,
        name,
        imageUrl,
        summary,
        authorId
      );

      if (!updatedBook) {
        return res.status(404).json({ error: "Livro não encontrado" });
      }

      res.json(updatedBook);
    } catch (error) {
      console.error("Erro ao atualizar Livro:", error);
      res.status(500).json({ error: "Erro ao atualizar Livro!" });
    }
  }

  // DELETE /livros/:id
  async deleteBook(req, res) {
    try {
      const { id } = req.params;

      // Remover o Livro
      const result = await BookModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Livro não encontrado!" });
      }

      res.status(200).json({
        message: "Livro removido com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover Livro:", error);
      res.status(500).json({ error: "Erro ao remover Livro!" });
    }
  }
}

export default new BookController();
