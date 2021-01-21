exports.up = (knex, Promise) => {
  return knex.schema.createTable('memes', (table) => {
    table.increments('id').primary()
    table.string('url')
    table.string('submitted_by')
    table.integer('category_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('memes')
}
