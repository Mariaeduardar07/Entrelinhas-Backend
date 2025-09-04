import { PrismaClient } from '../generated/prisma/client.js'
const prisma = new PrismaClient();

class BookModel {
  // Obter todos os livros
  async findAll() {
    const livros = await prisma.book.findMany({
      include: {
        author: true,
      },
    });

    // console.log(livros);
    return livros;
  }

  // Obter um livro pelo ID
  async findById(id) {
    const livro = await prisma.book.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        author: true,
      },
    });

    return livro;
  }

  // Criar um novo livro
  async create(
    name,
    imageUrl,
    summary,
    historical_period,
    authorId
  ) {
    const novoLivro = await prisma.book.create({
      data: {
        name,
        imageUrl,
        summary,
        historical_period,
        authorId: Number(authorId),
      },
    });

    return novoLivro;
  }

  // Atualizar um livro
  async update(
  id,
  name,
  imageUrl,
  summary,
  historical_period,
  authorId
  ) {
    const livro = await this.findById(id);

    if (!livro) {
      return null;
    }

    // Atualize o livro existente com os novos dados
    const livroAtualizado = await prisma.book.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        imageUrl,
        summary,
        historical_period,
        authorId: Number(authorId),
      },
    });

    return livroAtualizado;
  }

  // Remover um livro
  async delete(id) {
    const livro = await this.findById(id);

    if (!livro) {
      return null;
    }

    await prisma.book.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new BookModel();