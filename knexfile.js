module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, cb) =>
        conn.run('PRAGMA foreign_keys = ON', cb)
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    seeds: {
      directory: './tests/seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: Object.assign(require('pg-connection-string').parse(process.env.DATABASE_URL), { ssl: { rejectUnauthorized: false } }),
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
      // tableName: '20160802144759_memes',
      // tableName: '20210121205758_categories',
      // tableName: '20210121210049_comments'
    }
  }
}
