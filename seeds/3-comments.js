
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, meme_id: 2, comment : "I don't get it. I've never seen this furniture in my life.", submitted_by : "lara", rating : 0},
      ]);
    });
};
