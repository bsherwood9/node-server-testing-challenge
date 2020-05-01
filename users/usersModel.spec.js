const db = require("../data/dbConfig");
const Users = require("./usersModel");

describe("Users Model", () => {
  describe("tests around the adding functionality", () => {
    it("test ability to add users", async () => {
      await Users.add({ username: "big tuna", password: "Nastyman" });

      const userCount = await db("users");
      expect(userCount).toHaveLength(1);
    });
    // it("should add a single hobbit", async () => {
    //   let hobbit = await Hobbits.insert({ name: "sam" });
    //   expect(hobbit.name).toBe("sam");

    //   hobbit = await Hobbits.insert({ name: "jojo" });
    //   expect(hobbit.name).toBe("jojo");
    // });
    it("test ability to remove users", async () => {
      await Users.remove(1);

      const userCount = await db("users");
      expect(userCount).toHaveLength(23);
    });
  });
});

beforeEach(async () => {
  await db("users").truncate();
});
