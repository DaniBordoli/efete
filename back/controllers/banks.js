const BanksModel = require("../models/banks");


const BanksController = {
    findAll(req, res) {
      BanksModel.find()
        .then((banks) => {
          res.send(banks);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    },}

module.exports = BanksController

