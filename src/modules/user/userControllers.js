const bcrypt = require("bcryptjs");
const UserModel = require("../user/userModel");
const userModel = require("../user/userModel");



const getUser = async (req, res) => { 
  try {
    const users = await userModel.find()
    res.status(200).send(users)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


module.exports = {  getUser };
