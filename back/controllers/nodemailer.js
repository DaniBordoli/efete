const nodemailer = require("nodemailer");
const IP = require("../config");
require("dotenv").config();
const { User } = require("../models/index");

const SendMail = function (user) {
  const code = Math.floor(Math.random() * 899999) + 100000;
  User.findByIdAndUpdate(user._id, { verifCode: code }).then(() => {
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
      from: `${process.env.MAIL}`,
      to: `${user.username}`,
      subject: "Verificacion - " + code.toString(),
      text: "Se registro",
      html:
        /* "Hola!<br>Muchas gracias por registrarte. Tu código de verificación es " +
        code.toString() +
        ".",
 */

        `<body style="background-color: #212121;">

        <div style="margin: 0;
        padding: 0 0 20px 0;
        width: 100%;
        background-color: #212121;
        
    
        "> 
         
     
     
        <div style="border-collapse: collapse!important;
        background-color: black;
        color: #0a0a0a;
        font-family: Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.3;
        margin: 0;
        padding: 0;
        text-align: left;
        vertical-align: top;
        padding-bottom: 15%;
        ">
    <img style="clear: both;
    display: block;
    max-width: 100%;
    outline: 0;
    margin: 0 auto;
    text-decoration: none;
    width: auto;" src="https://firebasestorage.googleapis.com/v0/b/efete-db5f7.appspot.com/o/LogoEfete.png?alt=media&token=cfe0ae0b-f580-4546-9e64-5665d219f8fa" alt="">
    
    
    
       
    <p style="
    font-family: Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.3;
    margin: 34px 0 8px 0;
    padding: 0;
    text-align: center;
    color:white;">Bienvenido</p> <br>



   <p style="color: #888;
   font-size: 22px;
  
   line-height: 1.5;
   margin: 24px auto;
   margin-bottom: 30px;
   padding: 0;
   text-align: center;
   width: 90%;">  Muchas gracias por registrarte.Tu código de verificación es: </p> 
    
    
    
       <p 
       style="
    
       border-radius: 50px;
       color: #fefefe;
       background-color: #6f76e4;
       font-size: 26px;
       font-weight: 400;
       margin: 0 auto;
       padding: 16px 48px;
       display: flex;
       width: 70px;
      

       
    "
      >
         ${code.toString()}
       </p>
    
    
    
    </div>
       <div style="
       
       color: #aaa;
       font-family: Arial,Helvetica,sans-serif;
       font-size: .8rem;
       font-weight: 400;
       line-height: 1.35;
       margin: 0;
       margin-bottom: 10px;
       padding-top: 20px;
       text-align: left;">
        
    Cobranzas Regionales S.A. (Efete) se limita a ofrecer servicios de pago y no se encuentra autorizada a operar como entidad financiera por el Banco Central de la República Argentina. Los fondos depositados en cuentas de pago no constituyen depósitos en una entidad financiera, ni cuentan con ninguna de las garantías que tales depósitos puedan gozar de acuerdo con la legislación y reglamentación aplicables en materia de depósitos en entidades financieras.
    
    Efete informa que este mensaje ha sido emitido libre de virus. Para mayor información comunicate con soporte@Efete.com. Si recibiste un e-mail o un llamado telefónico solicitándote tus claves personales, no lo respondas. Nunca reveles tus claves, usuarios, datos personales o números de cuentas, bajo ningún concepto. Obtené más información en el sitio web de Protección de Datos Personales (argentina.gob.ar/aaip/datospersonales).
    
    Notas de confidencialidad: Este mensaje (y sus anexos) es confidencial y para uso exclusivo del/los destinatario/s, puede contener información amparada por secreto profesional/comercial o de propiedad exclusiva de Efete, su contenido no debe ser utilizado en forma no autorizada expresamente por el emisor o si configura delitos previstos en el art.153/7 del Cod. Penal. Se prohíbe cualquier revisión, retransmisión, diseminación u otro uso, o la toma de cualquier acción, a partir de esta información por parte de personas o entidades distintas al destinatario. Si recibiste este e-mail por error, por favor comunicalo inmediatamente a la casilla de correo soporte@Efete.com. y destruí el mensaje; no copies el mensaje ni divulgues su contenido. Se deja expresa constancia que podrás ejercer tu derecho de retiro o bloqueo total o parcial de tu nombre en nuestra base de datos, mediante contacto con nosotros a soporte@Efete.com. Para mejor comprensión, se transcriben la ley 25.326, artículo 27, inciso 3°: "Archivos, registros o bancos de datos con fines de publicidad (...) 3. El titular podrá en cualquier momento solicitar el retiro o bloqueo de su nombre de los bancos de datos a los que se refiere el presente artículo." y el decreto 1558/01, artículo 27, anexo I: "En toda comunicación con fines de publicidad que se realice por correo, teléfono, correo electrónico, Internet u otro medio a distancia a conocer, se deberá indicar, en forma expresa y destacada, la posibilidad del titular del dato de solicitar el retiro o bloqueo, total o parcial, de su nombre de la base de datos. A pedido del interesado, se deberá informar el nombre del responsable o usuario del banco de datos que proveyó la información.
    
       </div>
       
    </div>
       
    </body>`,
    };

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email enviado");
      }
    });
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
    from: `${process.env.MAIL}`,
    to: transaction.user[0].username,
    subject: `Transacción - ${transaction._id}`,
    text: "Se registro",
    /* `<h2>Tu Transacción se realizó correctamente</h2> <br/> <h3>Monto:</h3> $ ${transaction.amount} <br/> <h3>Dónde:</h3> ${transaction.agent[0].name} - ${transaction.agent[0].address} <br/> <h3>Número de Transacción:</h3> ${transaction._id}`, */

    html: `<body style="background-color:#fafafa;    margin: -1px;
      ">
      
          <div style="margin: 0;
          padding: 0 0 20px 0;
          width: 100%;
          background-color: #f8f8f8ec;
          
      
          ">
      
      
      
              <div style="border-collapse: collapse!important;
          font-family: Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.3;
          margin: 0;
          padding: 0;
          text-align: left;
          vertical-align: top;
          
          ">
      
      
                  <div style="background-color: rgb(245, 245, 245); width: 100%;">
                      <img style="clear: both;
      display: block;
      max-width: 100%;
      outline: 0;
      margin: 0 auto;
      text-decoration: none;
      width: auto;" src="https://firebasestorage.googleapis.com/v0/b/efete-db5f7.appspot.com/o/logo3.png?alt=media&token=185490cc-419f-4812-be97-20ceaa90a027"
                          alt="">
                      <img style="width: 18%; height: 18%;    padding-top: 8%;
      
         display: block;
         margin: 0 auto;
         
         " src="https://freeiconshop.com/wp-content/uploads/edd/checkmark-flat.png" alt="">
                      <p style="
      font-size: 22px;
      font-weight: 500;
      text-align: center;
      color:#555cc7;">¡Tu cobro se procesó con exito!</p> <br>
                  </div>
      
      
      
                  <div style="background-color: rgb(245, 245, 245);padding: 20px;     margin-top: 30px;
                  ">
      
                  <h3 style="color: #6f76e4;
      text-transform: uppercase; text-align: start;">Resumen de la transacción</h3>
      
                      <p style="color: #888;
      font-size: 15px;    font-weight: 600;
      
      ">Monto:</p>
                      <p style="color:#6f76e4 ;font-size: 17px;margin-top: -10px;">${transaction.amount}</p>
      
      
      
                      <p style="color: #888;
      font-size: 15px;    font-weight: 600;
      
      ">Dónde:</p>
                      <p style="color:#6f76e4 ;font-size: 17px;margin-top: -10px; width: 100%;"> ${transaction.agent[0].name}
                      </p>


                      <p style="color: #888;
                      font-size: 15px;    font-weight: 600;
                      
                      ">Dirección:</p>
                                      <p style="color:#6f76e4 ;font-size: 17px;margin-top: -10px; width: 100%;">${transaction.agent[0].address}
                                      </p>
                      
      
      
      
                      <p style="color: #888;
      font-size: 15px ;   font-weight: 600;
      
      ">Número de Transacción:</p>
                      <p style="color:#6f76e4 ;font-size: 17px;margin-top: -10px;width: 100%;    margin-bottom: 40px;

      ">${transaction._id}
                      </p>
                      <hr>
                      <p style="    text-align: center;
                      color: #ffffff;
                      font-weight: 700;
                      background-color: #8d8cee;
                      padding: 15px;
                      width: 69%;
                      margin: 0 auto;
                      border-radius: 30px;
                      margin-top: 20px;
      ">DESCARGAR COMPROBANTE</p>
                  </div>
      
      
      
      
      
      
              </div>
              <div style="
         
         color: #aaa;
         font-family: Arial,Helvetica,sans-serif;
         font-size: .8rem;
         font-weight: 400;
         line-height: 1.35;
         margin: 0;
         margin-bottom: 10px;
         padding-top: 20px;
         text-align: center;">
         <p style=" margin:5px ;text-align: center;">NOTA: Favor no responder este mensaje que ha sido generado automáticamente desde TuRecibo. Esta comunicación (incluidos sus anexos) contiene información confidencial, dirigida exclusivamente a su destinatario, quien deberá resguardar la confidencialidad. Queda prohibido la divulgación, modificación, reproducción o uso de la información aquí contenida por cualquier otra persona que no sea su destinatario.</p>
        
      
      Este mensaje se envió a traves de efete@gmail.com.
      Política de privacidad  |  Hacer ajustes en la configuración  | Ayuda |  Castillo 1332, C1414 CABA - Buenos Aires, Argentina.
      Copyright © 2020-2020
      Una empresa de Efete, n.o de registro: 4366729
      content-es@efete.com 
      
              </div>
      
          </div>
      
      </body>`,
  };

  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado");
    }
  });
};

const SendSharedAgent = function (sharedAgent) {
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
    from: `${process.env.MAIL}`,
    to: sharedAgent.username,
    subject: `Tienes un nuevo Acceso`,
    text: "Se registro",
    html: `<body style="background-color:#fafafa;    margin: -1px;
      ">
      
          <div style="margin: 0;
          padding: 0 0 20px 0;
          width: 100%;
          background-color: #f8f8f8ec;
          
      
          ">
      
      
      
              <div style="border-collapse: collapse!important;
          font-family: Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.3;
          margin: 0;
          padding: 0;
          text-align: left;
          vertical-align: top;
          
          ">
      
      
                  <div style="background-color: rgb(245, 245, 245); width: 100%;">
                      <img style="clear: both;
      display: block;
      max-width: 100%;
      outline: 0;
      margin: 0 auto;
      text-decoration: none;
      width: auto;" src="https://firebasestorage.googleapis.com/v0/b/efete-db5f7.appspot.com/o/logo3.png?alt=media&token=185490cc-419f-4812-be97-20ceaa90a027"
                          alt="">
                      <img style="width: 18%; height: 18%;    padding-top: 8%;
      
         display: block;
         margin: 0 auto;
         
         " src="https://freeiconshop.com/wp-content/uploads/edd/checkmark-flat.png" alt="">
                      <p style="
      font-size: 22px;
      font-weight: 500;
      text-align: center;
      color:#555cc7;">${sharedAgent.agent[0].user[0].firstName} ${sharedAgent.agent[0].user[0].lastName} Te dio acceso a su Comercio</p> <br>
                  </div>
      
      
      
                  <div style="background-color: rgb(245, 245, 245);padding: 20px;     margin-top: 30px;
                  ">
      
                  <h3 style="color: #6f76e4;
      text-transform: uppercase; text-align: start;">Datos de Acceso:</h3>
      
                      <p style="color: #888;
      font-size: 15px;    font-weight: 600;
      
      ">Nombre del Comercio:</p>
                      <p style="color:#6f76e4 ;font-size: 17px;margin-top: -10px;">${sharedAgent.agent[0].name}</p>
      
      
      
                      <p style="color: #888;
      font-size: 15px;    font-weight: 600;
      
      ">Dirección:</p>
                      <p style="color:#6f76e4 ;font-size: 17px;margin-top: -10px; width: 100%;"> >${sharedAgent.agent[0].address}
                      </p>


                      <p style="color: #888;
                      font-size: 15px;    font-weight: 600;
                      
                      ">Nivel de Acceso:</p>
                                      <p style="color:#6f76e4 ;font-size: 17px;margin-top: -10px; width: 100%;">${sharedAgent.access}
                                      </p>
                      
      
      
      
                      <p style="color: #888;
      font-size: 15px ;   font-weight: 600;
      
      ">Número de Comprobante:</p>
                      <p style="color:#6f76e4 ;font-size: 17px;margin-top: -10px;width: 100%;    margin-bottom: 40px;

      ">${sharedAgent._id}
                      </p>
                      <hr>
                  </div>
      
      
      
      
      
      
              </div>
              <div style="
         
         color: #aaa;
         font-family: Arial,Helvetica,sans-serif;
         font-size: .8rem;
         font-weight: 400;
         line-height: 1.35;
         margin: 0;
         margin-bottom: 10px;
         padding-top: 20px;
         text-align: center;">
         <p style=" margin:5px ;text-align: center;">NOTA: Favor no responder este mensaje que ha sido generado automáticamente desde TuRecibo. Esta comunicación (incluidos sus anexos) contiene información confidencial, dirigida exclusivamente a su destinatario, quien deberá resguardar la confidencialidad. Queda prohibido la divulgación, modificación, reproducción o uso de la información aquí contenida por cualquier otra persona que no sea su destinatario.</p>
        
      
      Este mensaje se envió a traves de efete@gmail.com.
      Política de privacidad  |  Hacer ajustes en la configuración  | Ayuda |  Castillo 1332, C1414 CABA - Buenos Aires, Argentina.
      Copyright © 2020-2020
      Una empresa de Efete, n.o de registro: 4366729
      content-es@efete.com 
      
              </div>
      
          </div>
      
      </body>`,
  };

  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado");
    }
  });
};

module.exports = { SendMail, SendTransaction, SendSharedAgent };
