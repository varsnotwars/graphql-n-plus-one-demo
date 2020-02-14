const { ApolloServer } = require("apollo-server");

const { resolvers } = require("./resolvers");
const { typeDefs } = require("./schema");

const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ knex })
});

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
