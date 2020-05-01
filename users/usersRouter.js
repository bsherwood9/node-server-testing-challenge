const router = require("express").Router();
const db = require("../data/dbConfig.js");
const Users = require("../users/usersModel");

router.get("/", (req, res) => {
  Users.getAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(500).json({ message: "there was an error getting data", err })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.findById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(401).json({ message: "Could not find that user" });
      }
    })
    .catch((err) =>
      res
        .status(500)
        .json({ message: "there was an error getting data by that id", err })
    );
});

router.post("/", (req, res) => {
  const body = req.body;
  Users.add(body)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(401).json({ message: "There was an error", err });
      }
    })
    .catch((err) =>
      res.status(500).json({ message: "there was an error getting data", err })
    );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Users.updateUser(id, changes)
    .then((updates) => {
      if (updates) {
        res.status(200).json(updates);
      } else {
        res.status(401).json({ message: "Couldn't update using that Id", err });
      }
    })
    .catch((err) =>
      res.status(500).json({ message: "there was an error updating", err })
    );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Users.remove(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res
          .status(401)
          .json({ message: "Could not find user by that id", err });
      }
    })
    .catch((err) =>
      res.status(500).json({ message: "there was an deleting that user", err })
    );
});

module.exports = router;
