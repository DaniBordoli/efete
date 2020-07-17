const Transaction = require("../models/transactions");
require("../config/db");

const charmander = {
  amount: 2350,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f0f89d80e87d154048bb6f0",
  },
  agent: { _id: "5f11c28efe514f5ae4cbd243" },
  originAccount: { _id: "5f11c4c667715f1364ac92c7" },
  destinationAccount: { _id: "5f11c4c667715f1364ac92c7" },
};

const bulbasaur = {
  amount: 500,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f0f89d80e87d154048bb6f0",
  },
  agent: { _id: "5f11c28efe514f5ae4cbd243" },
  originAccount: { _id: "5f11c4c667715f1364ac92c7" },
  destinationAccount: { _id: "5f11c4c667715f1364ac92c7" },
};

const squirtle = {
  amount: 1000,
  comissionTotal: 50,
  comissionEfete: 25,
  comissionAgent: 25,
  user: {
    _id: "5f0f89d80e87d154048bb6f0",
  },
  agent: { _id: "5f11c28efe514f5ae4cbd243" },
  originAccount: { _id: "5f0ca75b36577442ccbc74a6" },
  destinationAccount: { _id: "5f11c4c667715f1364ac92c7" },
};

Transaction.insertMany([charmander, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
