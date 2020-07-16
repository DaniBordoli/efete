const { User } = require("../models/index");
const SendMail = require("../controllers/nodemailer");

const userRegister = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      return User.findOne({ username: req.body.username });
    })
    .then((user) => {
      SendMail(user);
      res.sendStatus(200);
    })

    .catch((err) => res.status(400).send(err));
};

const userLogin = (req, res) => {
  console.log("REQ>USER:", req.user)
  res.json(req.user);
};

const userLogout = (req, res) => {
  if (req.isAuthenticated()) {
    console.log("usuario deslogueado");
    req.logout();
  }
  res.sendStatus(200);
};

const editProfileUser = (req, res) => {
  let id = req.body.id;
  User.findByIdAndUpdate(id, req.body, { new: true }).then((userProfile) => {
    res.status(200).send(userProfile);
  });
};

const userVerify = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      SendMail(user);
      res.sendStatus(200);
    })
    .catch((err) => res.status(400).send(err));
};

module.exports = {
  userRegister,
  userLogin,
  userLogout,
  editProfileUser,
  userVerify,
};
