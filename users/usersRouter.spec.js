const request = require("supertest");
const server = require("../api/server.js");

describe("server", () => {
  it("should set the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("Get /api/users", () => {
    //re
    it("should return 200", () => {
      return request(server)
        .get("/api/users")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
    it("should return {api: good}", async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "good" });
    });
  });
  describe("Post /api/users", () => {
    it("post returns 200", async () => {
      const res = await request(server)
        .post("/api/users")
        .send({ username: "Doug", password: "cat" });
      expect(res.status).toBe(200);
    });
    it("post successfully creates user", async () => {
      const res = await request(server)
        .post("/api/users")
        .send({ username: "Doug1", password: "cat1" });
      expect(res.body.username).toBe("Doug1");
      expect(res.body.password).toBe("cat1");
    });
    it("post successfully creates user", async () => {
      const res = await request(server).get("/api/users/1");
      console.log("This is the id", res.body.id);
    });
  });
  describe("Delete /api/users/:id", () => {
    it("delete returns 200 and number of users deleted", async () => {
      const res = await request(server).delete("/api/users/1");
      expect(res.status).toBe(200);
      expect(res.body).toBe(1);
    });
    it("user no longer exists", async () => {
      const res = await request(server).get("/api/users/1");
      expect(res.status).toBe(401);
      expect(res.body.message).toBe("Could not find that user");
    });
  });
});
