const User = require("../models/users");
require("../config/db");

const charmander = {
  firstName: "Joaquin",
  lastName: "Gaona",
  isVerified: true,
  dni: "37245882",
  username: "joaquinngaona@gmail.com",
  password: "1234",
  role: "user",
  validatedIdentity: true,
  gender: "M",
  processVerification: true,
};

User.insertMany([charmander]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
