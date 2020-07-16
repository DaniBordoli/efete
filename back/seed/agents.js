const Agent = require("../models/agents");

require("../config/db");

const charmander = {
  name: "Open25",
  address: "Cochabamba 2678",
  CUIL: 3017263882,
  dailyAmount: 7000,
  user: {
    _id: "5f063aac7c500b6f49952346",
  },
};

const bulbasaur = {
  name: "Ypf",
  address: "Libertador 1000",
  CUIL: 135674839,
  dailyAmount: 14000,
  user: {
    _id: "5f064320cefb0877fc05368c",
  },
};

const squirtle = {
  name: "El Jevi",
  address: "Gutierrez 245",
  CUIL: 93726892,
  dailyAmount: 10000,
  user: {
    _id: "5f064320cefb0877fc05368d",
  },
};

Agent.insertMany([charmander, bulbasaur, squirtle]).then(() => {
  console.log("Ready to go!");

  process.exit();
});
