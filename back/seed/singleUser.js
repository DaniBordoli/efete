const User = require("../models/users");
require("../config/db");

const charmander = {
  firstName: "Joaquin",
  lastName: "Gaona",
  isVerified: true,
  dni: 23456783,
  username: "joaco@gmail.com",
  password: "1234",
};

User.insertMany([charmander]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
