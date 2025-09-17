import prisma from "../../prisma/prisma.js";

class AuthorModel {
  // Obter todos os autores
  async findAll() {
    const autores = await prisma.author.findMany({
      include: {
        books: true,
      },
    });

    // console.log(autores);

    return autores;
  }

  // Obter um autor pelo ID
  async findById(id) {
    const autor = await prisma.author.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        books: true,
      },
    });

    return autor;
  }

  // Criar um novo autor
  async create(nome, imageUrl, biography, historical_period, curiosities) {
    const novoAutor = await prisma.author.create({
      data: {
       nome,
        imageUrl,
        biography,
        historical_period,
        curiosities,
      },
    });

    return novoAutor;
  }

  // Atualizar um autor
  async update(id, nome, imageUrl, biography, historical_period, curiosities) {
    const autor = await this.findById(id);

    if (!autor) {
      return null;
    }

    // Atualize o autor existente com os novos dados
    if (nome !== undefined) {
      autor.name = nome;
    }
    if (imageUrl !== undefined) {
      autor.imageUrl = imageUrl;
    }
    if (biography !== undefined) {
      autor.biography = biography;
    }
    if (historical_period !== undefined) {
      autor.historical_period = historical_period
    }
    if (curiosities !== undefined) {
      autor.curiosities = curiosities;
    }


    const autorAtualizada = await prisma.author.update({
      where: {
        id: Number(id),
      },
      data: {
        nome,
        imageUrl,
        biography,
        historical_period,
        curiosities,
      },
    });

    return autorAtualizada;
  }

  // Remover um autor
  async delete(id) {
    const autor = await this.findById(id);

    if (!autor) {
      return null;
    }

    await prisma.author.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new AuthorModel();