exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "test", password: "test" },
        { username: "test2", password: "test2" },
        { username: "test3", password: "test3" },
      ]);
    });
};
