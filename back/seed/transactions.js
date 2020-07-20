const Transaction = require("../models/transactions");
require("../config/db");

const charmander = {
  amount: 2350,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f135ee39656182f99dea88a",
  },
  agent: { _id: "5f135f55aa3c333017f57cfb" },
  originAccount: { _id: "5f135fe0217b94308c20992d" },
  destinationAccount: { _id: "5f135fe0217b94308c20992b" },
};

const bulbasaur = {
  amount: 1200,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f135ee39656182f99dea88a",
  },
  agent: { _id: "5f135f55aa3c333017f57cfb" },
  originAccount: { _id: "5f135fe0217b94308c20992d" },
  destinationAccount: { _id: "5f135fe0217b94308c20992b" },
};

const squirtle = {
  amount: 700,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f135ee39656182f99dea88a",
  },
  agent: { _id: "5f135f55aa3c333017f57cfb" },
  originAccount: { _id: "5f135fe0217b94308c20992d" },
  destinationAccount: { _id: "5f135fe0217b94308c20992b" },
};

Transaction.insertMany([charmander, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
