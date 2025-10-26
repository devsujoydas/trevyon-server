const express = require("express");
const router = express.Router();
const { getUser, loggedUser } = require("./userControllers");


router.get("/", loggedUser)
router.get("/get-users", getUser);

module.exports = router;

