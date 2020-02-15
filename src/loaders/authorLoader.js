const DataLoader = require("dataloader");

module.exports = knex => ({
  authorLoader: new DataLoader(async authorIds => {
    const result = await knex("authors").whereIn("id", authorIds);

    // need key/value for map below
    const authorsMap = result.reduce(
      (map, author) => ({ ...map, [author.id]: author }),
      {}
    );

    return authorIds.map(
      authorId => authorsMap[authorId] || new Error(`No result for ${authorId}`)
    );
  })
});
