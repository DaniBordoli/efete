const Account = require("../models/accounts");
require("../config/db");

const charmander = {
  entity: 72,
  nameEntity: "Santander",
  accountNumber: 6563289820230,
  cbu_cvu: "cbu",
  user: {
    _id: "5f15d76b6b62b44540f96da2",
  },
};

const charmander2 = {
  entity: 143,
  nameEntity: "Brubank",
  accountNumber: 9786753678,
  cbu_cvu: "cbu",
  user: {
    _id: "5f15d76b6b62b44540f96da3",
  },
};

const bulbasaur = {
  entity: 17,
  nameEntity: "BBVA",
  accountNumber: 83783472923,
  cbu_cvu: "cbu",
  user: {
    _id: "5f15d76b6b62b44540f96da4",
  },
};

const squirtle = {
  entity: 322,
  nameEntity: "Banco Industrial",
  accountNumber: 1837437239,
  cbu_cvu: "cbu",
  user: {
    _id: "5f15d76b6b62b44540f96da4",
  },
};

Account.insertMany([charmander, charmander2, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
