# Graphql N + 1 problem demonstration

## Installation

`npm install`

## Database setup and seed

`npm run db:migrate`
`npm run db:seed`

## Start server

`npm start`

#### Note

- npx is used to run knex and nodemon so no global installation is required. (see: package.json)

- npm start script is configured for windows, to run on osx change the following:
  `"set DEBUG=knex:query && npx nodemon src/index",`
  to
  `DEBUG=knex:query npx nodemon src/index`
