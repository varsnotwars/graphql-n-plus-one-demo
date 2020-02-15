const resolversDataLoader = {
  Book: {
    author: async ({ authorId }, args, { authorLoader }) => {
      const author = await authorLoader.load(authorId);
      return author;
    }
  },
  Author: {
    books: () => []
  },
  Query: {
    books: async (parent, args, { knex }) => {
      const books = await knex("books").select();

      return books;
    }
  }
};

module.exports = { resolversDataLoader };
