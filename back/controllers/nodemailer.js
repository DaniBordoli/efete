const nodemailer = require("nodemailer");


const SendMail = function(username){
    console.log(username)

    var transporter = nodemailer.createTransport({
        secure:false,
        service: 'gmail',
        auth: {
            user: 'facu.efete@gmail.com',
            pass: 'Efete123<'
        },
        tls: {rejectUnauthorized: false }
    });

var mailOptions = {
    from: 'facu.efete@gmail.com',
    to: `${username}`,
    subject: 'Verificacion',
    text: 'Se registro' ,
    html: "<b>Hola, gracias por registrarte!</b><p><a href=\"http://www.yahoo.com\">Click Here</a></p>"
};

transporter.sendMail(mailOptions, function(error){
    if (error){
        console.log(error);
    } else {
        console.log("Email enviado");
    }
})
}


module.exports= SendMail


