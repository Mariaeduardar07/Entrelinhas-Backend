import { PrismaClient } from '../generated/prisma/client.js'
const prisma = new PrismaClient();

class CharacterModel {
  // Obter todos os personagens
  async findAll() {
    const personagens = await prisma.character.findMany({
      include: {
        book: true
      },
    });

    // console.log(curiosidade);
    return personagens;
  }

  // Obter um personagem pelo ID
  async findById(id) {
    const personagem = await prisma.character.findUnique({
      where: {
        id: Number(id),
      },
        include: {
          book: true,
        },
    });

    return personagem;
  }

  // Criar uma nova personagem
  async create(
    
        name,
        imageUrl
  ) {
    const novaPersonagem = await prisma.character.create({
      data: {
        name,
        imageUrl,
        bookId: Number(bookId),
      },
    });

    return novaPersonagem;
  }

  // Atualizar uma curiosidade
  async update(
    id,
    name,
    imageUrl,
    bookId
  ) {
    const personagem = await this.findById(id);

    if (!personagem) {
      return null;
    }

    // Atualize a personagem existente com os novos dados
    const personagemAtualizada = await prisma.character.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        imageUrl,
        bookId: Number(bookId),
      },
    });

    return personagemAtualizada;
  }

  // Remover uma personagem
  async delete(id) {
    const personagem = await this.findById(id);

    if (!personagem) {
      return null;
    }

    await prisma.character.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new CharacterModel();
