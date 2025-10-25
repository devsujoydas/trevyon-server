const express = require("express")
const router = express.Router()
const userRoute = require("./src/modules/user/userRoutes")
const authRoutes = require("./src/modules/auth/authRoutes")
const productRoutes = require("./src/modules/product/productRoutes")



router.use("/auth", authRoutes)
router.use("/user", userRoute)
router.use("/products", productRoutes)


module.exports = router