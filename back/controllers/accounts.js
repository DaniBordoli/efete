const AccountsModel = require("../models/accounts");
var ObjectID = require("mongodb").ObjectID;

const AccountsController = {
  findMainAccount(req, res) {
    AccountsModel.findOne({ user: req.params.userId, mainAccount: true })
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
    AccountsModel.find({ user: req.params.id })
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
    console.log("REQBODY",req.body)
    AccountsModel.find({ user: req.body.user })
      .then((accounts) => {
        if (accounts.length === 0) {
          AccountsModel.create({
            nameEntity: req.body.nameEntity,
            accountNumber: req.body.accountNumber,
            cbu_cvu: req.body.cbu_cvu,
            user: req.body.user,
            mainAccount: true,
          }).then(() => {
            return AccountsModel.find({ user: req.body.user })
              .populate("nameEntity")
              .populate("user")
              .then((accounts) => {
                res.status(201).send(accounts);
              });
          });
        } else {
          AccountsModel.create(req.body).then(() => {
            return AccountsModel.find({ user: req.body.user })
              .populate("nameEntity")
              .populate("user")
              .then((accounts) => {
                res.status(201).send(accounts);
              });
          });
        }
      })

      .catch((err) => {
        res.status(500).send(err);
      });
  },

  deleteById(req, res) {
    AccountsModel.deleteOne({ _id: req.params.id }).then(() => {
      AccountsModel.find({ user: req.params.userId })
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
    AccountsModel.findById(req.params.id)
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
          return AccountsModel.find({ user: req.params.userId })
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
    console.log("PARAMETRO:",req.params.id)
    AccountsModel.deleteOne({ _id: req.params.id }).then(() => {
          res.sendStatus(200);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    
  },
};

module.exports = AccountsController;
