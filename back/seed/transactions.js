const Transaction = require("../models/transactions");
require("../config/db");

const charmander = {
  amount: 2350,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f15d76b6b62b44540f96da2",
  },
  agent: { _id: "5f15d81b718e1b46570cfc23" },
  originAccount: { _id: "5f15d82b50d5c5466475c875" },
  destinationAccount: { _id: "5f15d82b50d5c5466475c877" },
};

const bulbasaur = {
  amount: 1200,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f15d76b6b62b44540f96da3",
  },
  agent: { _id: "5f15d81b718e1b46570cfc21" },
  originAccount: { _id: "5f15d82b50d5c5466475c876" },
  destinationAccount: { _id: "5f15d82b50d5c5466475c875" },
};

const squirtle = {
  amount: 700,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f15d76b6b62b44540f96da4",
  },
  agent: { _id: "5f15d81b718e1b46570cfc22" },
  originAccount: { _id: "5f15d82b50d5c5466475c877" },
  destinationAccount: { _id: "5f15d82b50d5c5466475c876" },
};

Transaction.insertMany([charmander, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
