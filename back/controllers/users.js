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

const editProfileUser = async (req, res) => {
  // let id = req.body._id;
  console.log('REQ.BODY.PASSWORD', req.body.password)
  let user = await User.findOne({
    _id : req.body._id
  })
  let newPassword = await user.hashPasswordUser(req.body.password)
  console.log('NEW PASS!!!!!!', newPassword, 'USER!!!!!', user)
  let updtatedUser =  await user.updateOne({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    // isVerified:
    // dniFront: 
    // dniBack: 
    // dni: 
    username: req.body.username,
    password: newPassword
    // profilePicture: 
    // role: 
    // validatedIdentity: 
    // gender: 
    // tcn: 

  })
  res.status(200).json(updtatedUser)
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
  User.find({ isEliminated: false }).then((users) => {
    res.json(users);
  });
};

const setTcn = (req, res) => {
  console.log(req.body, "REQ BODY TCN");
  User.updateOne({ _id: req.body._id }, req.body).then(() => {
    User.findById(req.body._id).then((user) => {
      res.send(user);
    });
  });
};

const deleteUser = (req, res) => {
  User.updateOne({ _id: req.params.id }, { isEliminated: true }).then(() => {
    console.log("USUARIO ELIMINADO");
    res.sendStatus(200);
  });
};

module.exports = {
  userRegister,
  userLogin,
  userLogout,
  editProfileUser,
  userVerify,
  getAllUsers,
  setTcn,
  deleteUser,
};
