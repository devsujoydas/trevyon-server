const express = require("express")
const router = express.Router()
const userRoute = require("./src/modules/user/userRoutes")
const authRoutes = require("./src/modules/auth/authRoutes")



router.use("/auth", authRoutes)
router.use("/user", userRoute)




module.exports = router