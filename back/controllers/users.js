const { User, Agent, Account } = require("../models/index");
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
                res.send(user);
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
  console.log("REQ.BODY", req.body);
  try {
    let user = await User.findOne({
      _id: req.body._id,
    });
    if (req.body.password) {
      let newPassword = await user.hashPasswordUser(req.body.password);
      console.log("NEW PASS!!!!!!", newPassword, "USER!!!!!", user);
      await user.updateOne({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: newPassword,
      });
    } else {
      await user.updateOne({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
      });
    }
    return User.findById(req.body._id).then((user) => {
      res.send(user);
    });
  } catch (err) {
    console.log(err);
  }
};

const editUserTransactions = (req, res) => {
  User.updateOne(
    { _id: req.body._id },
    { transactionsMade: req.body.transactionsMade }
  )
    .then(() => {
      return User.findById(req.body._id).then((user) => {
        res.send(user);
      });
    })
    .catch((err) => res.status(400).send(err));
};

const userValidation = (req, res) => {
  console.log(req.body, "REQ BODY");
  User.updateOne({ _id: req.body._id }, req.body).then(() => {
    return User.findById(req.body._id).then((user) => {
      console.log(user, "USER");
      res.send(user);
    });
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
  User.find({ isEliminated: false }).then((users) => {
    res.json(users);
  });
};

const setTcn = (req, res) => {
  User.updateOne({ _id: req.body._id }, req.body).then(() => {
    User.findById(req.body._id).then((user) => {
      res.send(user);
    });
  });
};

const deleteUser = (req, res) => {
  console.log(req.params.id, "REQPARAMS");
  User.updateOne({ _id: req.params.id }, { isEliminated: true })

    .then(() => {
      return Agent.updateMany(
        { user: req.params.id },
        { $set: { isEliminated: true } }
      );
    })
    .then(() => {
      return Account.updateMany(
        { user: req.params.id },
        { $set: { isEliminated: true } }
      );
    })
    .then(() => {
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
  userValidation,
  editUserTransactions,
};
