const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.js");

const userController = require("../controllers/user.js");

router.get("/users", auth, userController.getUsers)
router.post("/users/register", userController.createUser)
router.post("/users/login", userController.loginUser)

module.exports = router;