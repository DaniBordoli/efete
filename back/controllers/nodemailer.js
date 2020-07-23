const nodemailer = require("nodemailer");
const IP = require("../config");
require("dotenv").config();

const SendMail = function (user) {
  var transporter = nodemailer.createTransport({
    secure: false,
    service: "gmail",
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  link = `http://${IP}:1337/api/users/verify?id=${user._id}`;

  var mailOptions = {
    from: "facu.efete@gmail.com",
    to: `${user.username}`,
    subject: "Verificacion",
    text: "Se registro",
    html:
      "Hello,<br> Please Click on the link to verify your email.<br><a href=" +
      link +
      ">Click here to verify</a>",
  };

  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado");
    }
  });
};

const SendTransaction = function (transaction) {
  var transporter = nodemailer.createTransport({
    secure: false,
    service: "gmail",
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  var mailOptions = {
    from: "facu.efete@gmail.com",
    to: transaction.user[0].username,
    subject: `Transacción - ${transaction._id}`,
    text: "Se registro",
    html: `<h2>Tu Transacción se realizó correctamente</h2> <br/> <h3>Monto:</h3> $ ${transaction.amount} <br/> <h3>Dónde:</h3> ${transaction.agent[0].name} - ${transaction.agent[0].address} <br/> <h3>Número de Transacción:</h3> ${transaction._id}`,
  };

  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado");
    }
  });
};

module.exports = { SendMail, SendTransaction };
