const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("", userController.getUser);
router.patch("", userController.updateUser);

module.exports = router;
