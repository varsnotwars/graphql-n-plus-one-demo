const resolvers = {
  Book: {
    author: () => ({})
  },
  Author: {
    books: () => []
  },
  Query: {
    books: () => []
  }
};

module.exports = { resolvers };
