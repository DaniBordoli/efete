const Transaction = require("../models/transactions");
require("../config/db");

const charmander = {
  amount: 2350,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f0f14c1830a243382d6c6aa",
  },
  agent: { _id: "5f0632f8d75672228cc337c3" },
  originAccount: { _id: "5f0617933db0cd510a503a0f" },
  destinationAccount: { _id: "5f0617933db0cd510a503a12" },
};

const bulbasaur = {
  amount: 500,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f0f14c1830a243382d6c6aa",
  },
  agent: { _id: "5f0632f8d75672228cc337c3" },
  originAccount: { _id: "5f0617933db0cd510a503a11" },
  destinationAccount: { _id: "5f0617933db0cd510a503a11" },
};

const squirtle = {
  amount: 1000,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f0f14c1830a243382d6c6aa",
  },
  agent: { _id: "5f0632f8d75672228cc337c3" },
  originAccount: { _id: "5f0617933db0cd510a503a12" },
  destinationAccount: { _id: "5f0617933db0cd510a503a0f" },
};

Transaction.insertMany([charmander, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
