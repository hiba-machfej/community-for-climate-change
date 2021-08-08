const User = require("../models/user");
// const jwt = require("jsonwebtoken");

exports.getUsers = async (req, res, next) => {
  const users = await User.findAll();
  res.send(users);
};

exports.postSignUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = User.build({ email, password, name });

  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.postSignIn = async (req, res, next) => {
  req.session.user = req.user;
  res.send(req.user);
};
