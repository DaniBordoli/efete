const User = require("../models/users");
require("../config/db");

const charmander = {
  firstName: "Jesus",
  role:'agent',
  lastName: 'Lombardo',
  isVerified:true,
  dni:23456782,
  username: 'jesus@gmail.com',
  password:'1234',
  role:'user',
  validatedIdentity:true,
  gender:'M',
  tcn:'',
  isEliminated:false

}

User.insertMany([charmander]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
