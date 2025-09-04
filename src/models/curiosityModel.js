import { PrismaClient } from '../generated/prisma/client.js'
const prisma = new PrismaClient();

class CuriosityModel {
  // Obter todas as cartas
  async findAll() {
    const curiosidades = await prisma.curiosity.findMany({
      include: {
        author: true
      },
    });

    // console.log(curiosidade);
    return curiosidades;
  }

  // Obter uma curiosidade pelo ID
  async findById(id) {
    const curiosidade = await prisma.curiosity.findUnique({
      where: {
        id: Number(id),
      },
        include: {
          author: true,
        },
    });

    return curiosidade;
  }

  // Criar uma nova curiosidade
  async create(
    description,
    authorId
  ) {
    const novaCuriosidade = await prisma.curiosity.create({
      data: {
        description,
        authorId: Number(authorId),
      },
    });

    return novaCuriosidade;
  }

  // Atualizar uma curiosidade
  async update(
    id,
    description,
    authorId
  ) {
    const curiosidade = await this.findById(id);

    if (!curiosidade) {
      return null;
    }

    // Atualize a curiosidade existente com os novos dados
    const curiosidadeAtualizada = await prisma.curiosity.update({
      where: {
        id: Number(id),
      },
      data: {
        description,
        authorId: Number(authorId),
      },
    });

    return curiosidadeAtualizada;
  }

  // Remover uma curiosidade
  async delete(id) {
    const curiosidade = await this.findById(id);

    if (!curiosidade) {
      return null;
    }

    await prisma.curiosity.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new CuriosityModel();
