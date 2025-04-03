const express = require("express");
const {
  createImg,
} = require("../controller/img.controller");
const router = express.Router();

//router.get("/totalUsuarios", getUsers);
router.post("/createImg", createImg);



module.exports = router;