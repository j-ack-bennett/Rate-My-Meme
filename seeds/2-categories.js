
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, category: 'dank'},
        {id: 2, category: 'edgy'},
        {id: 3, category: 'r18'},
      ]);
    });
};
