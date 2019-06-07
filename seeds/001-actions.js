
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'db', project_id: '4'},
        {description: 'tables, seeds, and models', project_id: '4'},
        {description: 'routes and CRUD', project_id: '4'}
      ]);
    });
};
