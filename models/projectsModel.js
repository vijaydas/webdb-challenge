const knex = require("knex");
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    find,
    findById,
    add,
    getProjectPlusActions
    // update,
    // remove,
};

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
      .where({ id })
      .first();
  }

function add(project) {
    return db('projects')
    .insert(project)

}

function getProjectPlusActions(id) {
    return db('actions')
    .where({ 'actions.project_id': id })
    .first()
    .join('projects', 'project_id', 'actions.project_id')
    .select(
        'projects.id',
        'projects.name',
        'projects.description',
        'projects.isCompleted'
    )
};




// function update(id, changes) {
//     return db('projects')
//     .where({id})
//     .update(changes)
// }

// function remove(id) {
//     return db('projects')
//     .where({id})
//     .del()
// }
