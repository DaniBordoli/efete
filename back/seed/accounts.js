const Account = require("../models/accounts");
require("../config/db");

const charmander = {
  entity: 72,
  nameEntity: "Santander",
  accountNumber: 6563289820230,
  cbu_cvu: "cbu",
  user: {
    _id: "5f135ee39656182f99dea888",
  },
};

const charmander2 = {
  entity: 143,
  nameEntity: "Brubank",
  accountNumber: 9786753678,
  cbu_cvu: "cbu",
  user: {
    _id: "5f064320cefb0877fc05368d",
  },
};

const bulbasaur = {
  entity: 17,
  nameEntity: "BBVA",
  accountNumber: 83783472923,
  cbu_cvu: "cbu",
  user: {
    _id: "5f135ee39656182f99dea88a",
  },
};

const squirtle = {
  entity: 322,
  nameEntity: "Banco Industrial",
  accountNumber: 1837437239,
  cbu_cvu: "cbu",
  user: {
    _id: "5f135ee39656182f99dea88a",
  },
};

Account.insertMany([charmander, charmander2, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
