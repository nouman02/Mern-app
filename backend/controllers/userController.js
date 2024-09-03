let User = require("../models/user.model");

const getUser = async (req, res) => {
  User.find()
    .then(resp => res.json(resp))
    .catch(err => res.status(400).json("Error: " + err));
};
const addUser = async (req, res) => {
  const username = req.body.username;
  const user_email = req.body.user_email;
  const newUser = new User({
    username,
    user_email
  });
  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch(err => res.status(400).json("Error: " + err));
};
module.exports = {
  getUser,
  addUser
};
