// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knextest',
      user: 'postgres',
      password: 'mypassword'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  },

};
