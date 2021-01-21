exports.up = (knex, Promise) => {
    return knex.schema.createTable('comments', (table) => {
      table.increments('id').primary()
      table.integer('meme_id')
      table.string('comment')
      table.string('submitted_by')
      table.string('rating')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('comments')
  }
  