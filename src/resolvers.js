const resolvers = {
  Book: {
    author: async ({ authorId }, args, { knex }) => {
      const author = await knex("authors")
        .where({
          id: authorId
        })
        .first();

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

module.exports = { resolvers };
