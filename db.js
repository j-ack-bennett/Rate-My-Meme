const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllMemes,
  getCertainMemes,
  getMeme,
  addComment,
  getComments,
  addMeme
}

function getAllMemes (db = connection) {
  return db('memes').select()
}

function getCertainMemes (category, db = connection) {
  return db('memes')
  .join('categories', 'categories.id', 'memes.category_id')
  .where('category', category)
  .select('*', 'memes.id AS id')
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

function getComments (id, db = connection) {
  return db('comments')
  .where('meme_id', id)
  // .join('comments', 'comments.meme_id', "meme_id")
  // .where('comments.meme_id', id)
  // .select("*", "comments.id AS id", "memes.id AS meme_id")
}

function addMeme (url, submitted_by, category_id, db = connection) {
  return db('memes')
  .insert({url : url, submitted_by : submitted_by, category_id : category_id})
}
