const User = require("../models/users");
require("../config/db");

const charmander = {
  firstName: "Jesus",
  lastName: "Lombardo",
  isVerified: true,
  dni: 23456782,
  username: "jesus@gmail.com",
  password: "1234",
};

const bulbasaur = {
  firstName: "Juan",
  lastName: "Cor",
  isVerified: true,
  dni: 34456879,
  username: "juan@gmail.com",
  password: "1234",
};

const squirtle = {
  firstName: "Victoria",
  lastName: "Di Liscia",
  isVerified: true,
  dni: 40458289,
  username: "vico@gmail.com",
  password: "1234",
};

User.insertMany([charmander, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
