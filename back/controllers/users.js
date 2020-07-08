const { User } = require("../models/index");
const SendMail = require('../controllers/nodemailer');


const userRegister = (req, res, next) => {
  User.create(req.body)
  
    .then(() =>{
      SendMail(req.body.username)
      res.sendStatus(200)
    })
    
    .catch((err) => res.status(400).send(err));
};

const userLogin = (req, res) => {
    console.log("usuario logueado")
    res.json(req.user);
    
};

const userLogout = (req, res) => {
    console.log("REQ.USER",req.user)
    if (req.isAuthenticated()){
        console.log("usuario deslogueado")
        req.logout();
      }
      res.sendStatus(200);
}

module.exports = { userRegister,userLogin,userLogout };
