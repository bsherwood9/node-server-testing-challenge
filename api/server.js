const express = require("express");
const helmet = require("helmet");
const db = require("../data/dbConfig.js");
const cors = require("cors");
const userRouter = require("../users/usersRouter.js");

const server = express();

server.use(express.json());

server.use(helmet());
server.use(cors());

//routes
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "good" });
});

server.get("/cats", (req, res) => {
  db("users").then((users) => {
    res.status(200).json(users);
  });
});

module.exports = server;
