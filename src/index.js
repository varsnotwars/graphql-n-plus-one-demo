const { ApolloServer } = require("apollo-server");

const DataLoader = require("dataloader");

const { resolvers } = require("./resolvers");
const { resolversDataLoader } = require("./resolversDataLoader");

const { typeDefs } = require("./schema");

const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);

const server = new ApolloServer({
  typeDefs,
  resolvers: resolversDataLoader,
  context: () => ({
    knex,
    authorLoader: new DataLoader(async keys => {
      const result = await knex("authors").whereIn("id", keys);

      // need key/value for map below
      const authorsMap = result.reduce(
        (map, author) => ({ ...map, [author.id]: author }),
        {}
      );

      return keys.map(
        key => authorsMap[key] || new Error(`No result for ${key}`)
      );
    })
  })
});

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
