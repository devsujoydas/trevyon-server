const express = require("express");
const cors = require("cors");
require('dotenv').config();

const allRoutes = require("./app")
const connectDB = require("./src/config/connectDB");

connectDB()

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.get("/", (req, res) => { res.send("Trevyon Server is running 🚀"); })

app.use("/api", allRoutes);

app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
});