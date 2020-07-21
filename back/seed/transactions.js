const Transaction = require("../models/transactions");
require("../config/db");

const charmander = {
  amount: 2350,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f1604744ac1f538280aca64",
  },
  agent: { _id: "5f1604c71df146256416cb23" },
  originAccount: { _id: "5f160507cab91755fce4e535" },
  destinationAccount: { _id: "5f160507cab91755fce4e537" },
};

const bulbasaur = {
  amount: 1200,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f1604744ac1f538280aca65",
  },
  agent: { _id: "5f1604c71df146256416cb21" },
  originAccount: { _id: "5f160507cab91755fce4e536" },
  destinationAccount: { _id: "5f160507cab91755fce4e535" },
};

const squirtle = {
  amount: 700,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f1604744ac1f538280aca66",
  },
  agent: { _id: "5f1604c71df146256416cb22" },
  originAccount: { _id: "5f160507cab91755fce4e537" },
  destinationAccount: { _id: "5f160507cab91755fce4e536" },
};

Transaction.insertMany([charmander, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
