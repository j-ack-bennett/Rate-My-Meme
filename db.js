const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllMemes,
  getCertainMemes,
  getMeme,
  addComment
}

function getAllMemes (db = connection) {
  return db('memes').select()
}

function getCertainMemes (category, db = connection) {
  return db('memes')
  .join('categories', 'categories.id', 'memes.category_id')
  .where('category', category)
  .select('*', 'memes.id AS id').debug()
}

function getMeme (id, db = connection) {
  return db('memes')
  .where('id', id)
  .first()
}

function addComment (meme_id, submitted_by, comment, rating, db = connection)
{
  return db('comments')
  .insert({meme_id : meme_id, submitted_by : submitted_by, comment : comment, rating : rating})
}

