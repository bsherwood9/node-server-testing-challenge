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
    // it("should return users as router", () => {
    //   return request(server)
    //     .get("api/users")
    //     .then((res) => {
    //       console.log(res.body.router);
    //       expect(res.body.router).toBe("users");
    //     });
    // });
    it("should return JSON type", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });

    it("should return JSON type", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });
    it("should return {api: up}", async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "good" });
    });
  });
});
