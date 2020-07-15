const AccountsModel = require("../models/accounts")

// const AccountsController = {
//     findAll(req,res) {
//         AccountsModel.find({})
//         .then (accounts => {
//             res.send (accounts)
//         })
//         .catch (err => {
//             res.status(500).send(err)
//         })
//     },

    const AccountsController = {
        findAll(req, res) {
        console.log('hola', req.params.id)
        AccountsModel.find({ user: req.params.id })
            .then((accounts) => {
            console.log('chau',accounts)
            res.send(accounts);
            })
            .catch((err) => {
            res.status(500).send(err);
            });
        },


    createAccount(req,res) {
        console.log("cuenta",req.body)
        AccountsModel.create(req.body)
        .then (account => {
            console.log("acount",account)
            res.status(201).send(account)
        })
        .catch (err => {
            res.status (500).send(err)
        })
    },
    deleteById(req,res){
        AccountsModel.deleteOne({_id: req.params.id})
        .then (account => {
            res.send (account);
        })
        .catch (err => {
            res.status (500).send(err)
        })
    },
    findById(req,res){
        AccountsModel.findById(req.params.id)
        .then (accounts => {
            res.send (accounts);
        })
        .catch (err => {
            res.status (500).send(err)
        })
            
    }
}




module.exports = AccountsController;
