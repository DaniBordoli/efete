const Transaction = require("../models/transactions");
require("../config/db");

const charmander = {
  amount: 2350,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f0629864a5599161c6c5064",
  },
  agent: { _id: "5f0632f8d75672228cc337c4" },
  originAccount: { _id: "5f0617933db0cd510a503a0f" },
  destinationAccount: { _id: "5f0617933db0cd510a503a12" },
};

const bulbasaur = {
  amount: 500,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f0629864a5599161c6c5063",
  },
  agent: { _id: "5f0632f8d75672228cc337c2" },
  originAccount: { _id: "5f0617933db0cd510a503a11" },
  destinationAccount: { _id: "5f0617933db0cd510a503a0f" },
};

const squirtle = {
  amount: 1000,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f0629864a5599161c6c5062",
  },
  agent: { _id: "5f0632f8d75672228cc337c3" },
  originAccount: { _id: "5f0617933db0cd510a503a12" },
  destinationAccount: { _id: "5f0617933db0cd510a503a11" },
};

Transaction.insertMany([charmander, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
