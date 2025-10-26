const bcrypt = require("bcryptjs");
const userModel = require("../user/userModel");

const loggedUser = async (req, res) => {
  try {
    console.log(req.body)
  } catch (error) {

  }
}

const getUser = async (req, res) => {
  try {
    const users = await userModel.find().select("-password")
    res.status(200).send(users)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
 

module.exports = { getUser, loggedUser };
