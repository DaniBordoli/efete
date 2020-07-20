const nodemailer = require("nodemailer");
const IP = require("../config");

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

module.exports = SendMail;
