const faker = require("faker");

const ovule = {
  authors: [],
  books: []
};

for (let i = 1; i <= 25; i++) {
  const author = {
    id: i,
    name: faker.name.firstName()
  };

  const book = {
    id: i,
    title: faker.company.catchPhrase(),
    authorId: author.id
  };

  ovule.authors.push(author);
  ovule.books.push(book);
}

exports.seed = async knex => {
  await knex("books").del();
  await knex("authors").del();

  await knex("authors").insert([...ovule.authors]);
  await knex("books").insert([...ovule.books]);
};
