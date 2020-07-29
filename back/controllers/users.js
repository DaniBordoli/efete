const { User } = require("../models/index");
const { SendMail } = require("../controllers/nodemailer");
const { findById } = require("../models/users");

const userRegister = (req, res, next) => {
  User.findOne({ dni: req.body.dni })
    .then((user) => {
      if (user)
        res.send({ messageDni: "Ya hay un usuario registrado con este DNI." });
      if (!user) {
        return User.findOne({ username: req.body.username }).then((user) => {
          if (user)
            res.send({
              messageUsername: "Ya hay un usuario registrado con este correo.",
            });
          if (!user) {
            return User.create(req.body)
              .then((user) => {
                return User.findOne({ username: req.body.username });
              })
              .then((user) => {
                SendMail(user);
                res.sendStatus(200);
              });
          }
        });
      }
    })
    .catch((err) => res.status(400).send(err));
};

const userLogin = (req, res) => {
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
  let id = req.body._id;
  console.log(req.body, "REQBODYYYYY");
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

const getAllUsers = (req, res) => {
  User.find().then((users) => {
    res.json(users);
  });
};

module.exports = {
  userRegister,
  userLogin,
  userLogout,
  editProfileUser,
  userVerify,
  getAllUsers,
};
