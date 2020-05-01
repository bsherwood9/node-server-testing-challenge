const db = require("../data/dbConfig.js");

module.exports = {
  add,
  updateUser,
  remove,
  getAll,
  findById,
};

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return db("users").where({ id }).first();
}

async function updateUser(id, changes) {
  return db("users").where({ id }).update(changes);
}

function remove(id) {
  return db("users").where({ id }).del();
}

function getAll() {
  return db("users");
}

function findById(id) {
  return db("users").where({ id }).first();
}
