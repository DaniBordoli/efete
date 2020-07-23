const Account = require("../models/accounts");
require("../config/db");

const charmander = {
  entity: 72,
  nameEntity: "5f18abe07a5fb064c4b415d7",
  accountNumber: 6563289820230,
  cbu_cvu: "cbu",
  user: {
    _id: "5f1604744ac1f538280aca64",
  },
};

const charmander2 = {
  entity: 143,
  nameEntity: "5f18abe07a5fb064c4b415d3",
  accountNumber: 9786753678,
  cbu_cvu: "cbu",
  user: {
    _id: "5f1604744ac1f538280aca65",
  },
};

const bulbasaur = {
  entity: 17,
  nameEntity: "5f18abe07a5fb064c4b415d5",
  accountNumber: 83783472923,
  cbu_cvu: "cbu",
  user: {
    _id: "5f1604744ac1f538280aca66",
  },
};

const squirtle = {
  entity: 322,
  nameEntity: "5f18abe07a5fb064c4b415d0",
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
