const Transaction = require("../models/transactions");
require("../config/db");

const charmander = {
  amount: 2350,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f06118a3988da4a1972ad61",
  },
  agent: { _id: "5f1098421ebe6a3fd0fb7dc4" },
  originAccount: { _id: "5f0617933db0cd510a503a0f" },
  destinationAccount: { _id: "5f0617933db0cd510a503a12" },
};

const bulbasaur = {
  amount: 500,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f06118a3988da4a1972ad62",
  },
  agent: { _id: "5f1098421ebe6a3fd0fb7dc4" },
  originAccount: { _id: "5f0617933db0cd510a503a11" },
  destinationAccount: { _id: "5f0617933db0cd510a503a11" },
};

const squirtle = {
  amount: 1000,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f06118a3988da4a1972ad63",
  },
  agent: { _id: "5f0613df7611854c3595635a" },
  originAccount: { _id: "5f0617933db0cd510a503a12" },
  destinationAccount: { _id: "5f0617933db0cd510a503a0f" },
};

Transaction.insertMany([charmander, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
