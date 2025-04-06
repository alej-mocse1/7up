const express = require("express");
const {
  create,
  confirmEmail,
  getByEmail,
  deleteUser
} = require("../controller/person.controller");
const router = express.Router();

//router.get("/totalUsuarios", getUsers);
router.post("/createUser", create);
router.post("/confirmEmail", confirmEmail);
router.post("/getUserByEmail", getByEmail);
router.post("/deleteUser", deleteUser);

module.exports = router;
