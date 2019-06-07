
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: "4", name: 'Finish DB Sprint MVP'},
        {name: 'Try Stretch'},
        {name: 'Take a nap!'}
      ]);
    });
};
