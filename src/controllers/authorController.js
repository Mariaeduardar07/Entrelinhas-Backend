import AuthorModel from "../models/authorModel.js";

class AuthorController {
  // GET /autor
  async getAllAuthors(req, res) {
    try {
      const autores = await AuthorModel.findAll();
      res.json(autores);
    } catch (error) {
      console.error("Erro ao buscar os autores:", error);
      res.status(500).json({ error: "Erro ao buscar os autores" });
    }
  }

  // GET /autor/:id
  async getAuthorById(req, res) {
    try {
      const { id } = req.params;

      const autor  = await AuthorModel.findById(id);

      if (!autor) {
        return res.status(404).json({ error: "Autor não encontrada!" });
      }

      res.json(autor);
    } catch (error) {
      console.error("Erro ao buscar autor:", error);
      res.status(500).json({ error: "Erro ao buscar autor!" });
    }
  }

  // POST /autor
  async createAuthor(req, res) {
    try {
      // Validação básica
      const { nome, imageUrl, biography, historical_period, curiosities } = req.body;

      // Verifica se todos os campos do autor foram fornecidos
      if (!nome || !imageUrl || !biography || !historical_period || !curiosities) {
        return res.status(400).json({
          error: "Os campos nome, imagem, biografia, período histórico e curiosidades são obrigatórios",
        });
      }

      // Criar o novo autor
      const newAuthor = await AuthorModel.create(
        nome,
        imageUrl,
        biography,
        historical_period, 
        curiosities
      );

      if (!newAuthor) {
        return res.status(400).json({ error: "Erro ao criar autor" });
      }

      res.status(201).json({
        message: "Autor criado com sucesso",
        newAuthor,
      });
    } catch (error) {
      console.error("Erro ao criar autor:", error);
      res.status(500).json({ error: "Erro ao criar autor" });
    }
  }

  // PUT /autor/:id
  async updateAuthor(req, res) {
    try {
      const { id } = req.params;
      const { nome, imageUrl, biography, historical_period, curiosities } = req.body;

      // Atualizar o autor
      const updatedAuthor = await AuthorModel.update(
        id,
        nome,
        imageUrl,
        biography,
        historical_period,
        curiosities
      );

      if (!updatedAuthor) {
        return res.status(404).json({ error: "Autor não encontrado" });
      }

      res.json(updatedAuthor);
    } catch (error) {
      console.error("Erro ao atualizar autor:", error);
      res.status(500).json({ error: "Erro ao atualizar autor!" });
    }
  }

  // DELETE /autor/:id
  async deleteAuthor(req, res) {
    try {
      const { id } = req.params;

      // Remover o autor
      const result = await AuthorModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Autor não encontrado!" });
      }

      res.status(200).json({
        message: "Autor removido com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover autor:", error);
      res.status(500).json({ error: "Erro ao remover autor!" });
    }
  }
}

export default new AuthorController();