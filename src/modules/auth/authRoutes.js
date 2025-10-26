const express = require("express");
const { registerUser, loginUser, logoutUser } = require("./authControllers");
const { verifyToken } = require("./authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/me", verifyToken, (req, res) => {
  res.json({ message: "Authenticated", user: req.user });
});

module.exports = router;
