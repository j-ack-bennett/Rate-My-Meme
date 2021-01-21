exports.up = (knex, Promise) => {
    return knex.schema.createTable('categories', (table) => {
      table.increments('id').primary()
      table.string('category')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('categories')
  }
  
