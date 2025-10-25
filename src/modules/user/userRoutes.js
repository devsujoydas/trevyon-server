const express = require("express");
const router = express.Router();
const { getUser } = require("./userControllers");


router.get("/get-users", getUser);

module.exports = router;

