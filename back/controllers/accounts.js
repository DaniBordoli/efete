const AccountsModel = require("../models/accounts");

const AccountsController = {
  findMainAccount(req, res) {
    AccountsModel.findOne({
      user: req.params.userId,
      mainAccount: true,
      isEliminated: false,
    })
      .populate("nameEntity")
      .populate("user")
      .then((account) => {
        res.send(account);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  findAll(req, res) {
    AccountsModel.find({ user: req.params.id, isEliminated: false })
      .populate("nameEntity")
      .populate("user")
      .then((accounts) => {
        res.send(accounts);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  createAccount(req, res) {
    AccountsModel.findOne({cbu_cvu: req.body.cbu_cvu})
    .then((account)=> {
      if (account._id){
        res.send({ messageAccount: "Ya hay una cuenta registrada con este número." });
      } else {AccountsModel.find({ user: req.body.user, isEliminated: false })
      .then((accounts) => {
        if (accounts.length === 0) {
          return AccountsModel.create({
            nameEntity: req.body.nameEntity,
            accountNumber: req.body.accountNumber,
            cbu_cvu: req.body.cbu_cvu,
            user: req.body.user,
            mainAccount: true,
          }).then(() => {
            return AccountsModel.find({
              user: req.body.user,
              isEliminated: false,
            })
              .populate("nameEntity")
              .populate("user")
              .then((accounts) => {
                res.status(201).send(accounts);
              });
          });
        } else {
          AccountsModel.create(req.body).then(() => {
            return AccountsModel.find({
              user: req.body.user,
              isEliminated: false,
            })
              .populate("nameEntity")
              .populate("user")
              .then((accounts) => {
                res.status(201).send(accounts);
              });
          });
        }
      })}
    })
    

      .catch((err) => {
        res.status(500).send(err);
      });
  },

  deleteById(req, res) {
    console.log(req.params, "REQPARAMS");
    AccountsModel.updateOne(
      { _id: req.params.id },
      { isEliminated: true }
    ).then(() => {
      AccountsModel.find({ user: req.params.userId, isEliminated: false })
        .populate("nameEntity")
        .populate("user")
        .then((accounts) => {
          res.send(accounts);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    });
  },
  findById(req, res) {
    AccountsModel.findOne({ _id: req.params.id, isEliminated: false })
      .populate("nameEntity")
      .populate("user")
      .then((accounts) => {
        res.send(accounts);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  setMainAccount(req, res) {
    AccountsModel.updateMany(
      { user: req.params.userId },
      { $set: { mainAccount: false } }
    ).then(() => {
      AccountsModel.updateOne({ _id: req.params.id }, { mainAccount: true })
        .then(() => {
          return AccountsModel.find({
            user: req.params.userId,
            isEliminated: false,
          })
            .populate("nameEntity")
            .populate("user")
            .then((accounts) => {
              res.send(accounts);
            });
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    });
  },

  deleteMainAccount(req, res) {
    AccountsModel.updateOne({ _id: req.params.id }, { isEliminated: true })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};

module.exports = AccountsController;

