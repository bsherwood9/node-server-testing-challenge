const router = require("express").Router();
const db = require("../data/dbConfig.js");
const Users = require("../users/usersModel");

router.get("/", (req, res) => {
  res.status(200).json({ message: "i am a cat" });
});

module.exports = router;
