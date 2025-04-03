const express = require("express");
const {
  create,
  confirmEmail,
  getByEmail
} = require("../controller/person.controller");
const router = express.Router();

//router.get("/totalUsuarios", getUsers);
router.post("/createUser", create);
router.post("/confirmEmail", confirmEmail);
router.post("/getUserByEmail", getByEmail);


module.exports = router;
