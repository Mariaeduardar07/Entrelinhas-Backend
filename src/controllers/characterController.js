import characterModel from "../models/characterModel.js";


class CharacterController {
  // GET /personagens
  async getAllCharacters(req, res) {
    try {
      const personagens = await characterModel.findAll();
      res.json(personagens);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
      res.status(500).json({ error: "Erro ao buscar personagens" });
    }
  }

  // GET /personagens/:id
  async getCharacterById(req, res) {
    try {
      const { id } = req.params;

      const personagem = await characterModel.findById(id);

      if (!personagem) {
        return res.status(404).json({ error: "Personagem não encontrado!" });
      }

      res.json(personagem);
    } catch (error) {
      console.error("Erro ao buscar personagem:", error);
      res.status(500).json({ error: "Erro ao buscar personagem!" });
    }
  }

  // POST /personagens
  async createCharacter(req, res) {
    try {
      // Captura dos dados do corpo da requisição (frontend)
      const {
          name,
          imageUrl
      } = req.body;

      // Verifica se todos os campos do personagem foram fornecidos
      if (
        !name ||
        !imageUrl
      ) {
        return res.status(400).json({
          error:
            "Os campos nome e imagem são obrigatórios",
        });
      }

      // Criar a nova Personagem
      const newCharacter = await characterModel.create(
        name,
        imageUrl
      );

      if (!newCharacter) {
        return res.status(400).json({ error: "Erro ao criar personagem" });
      }

      res.status(201).json({
        message: "Personagem criado com sucesso",
        newCharacter,
      });
    } catch (error) {
      console.error("Erro ao criar personagem:", error);
      res.status(500).json({ error: "Erro ao criar personagem" });
    }
  }

  // PUT /personagens/:id
  async updatedCharacter(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        imageUrl
      } = req.body;

      // Atualizar o Personagem
      const updatedCharacter = await characterModel.update(
        id,
        name,
        imageUrl
      );

      if (!updatedCharacter) {
        return res.status(404).json({ error: "Personagem não encontrado" });
      }

      res.json(updatedCharacter);
    } catch (error) {
      console.error("Erro ao atualizar Personagem:", error);
      res.status(500).json({ error: "Erro ao atualizar Personagem!" });
    }
  }

  // DELETE /personagens/:id
  async deleteCharacter(req, res) {
    try {
      const { id } = req.params;

      // Remover o Personagem
      const result = await characterModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Personagem não encontrado!" });
      }

      res.status(200).json({
        message: "Personagem removido com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover Personagem:", error);
      res.status(500).json({ error: "Erro ao remover Personagem!" });
    }
  }
}

export default new CharacterController();
