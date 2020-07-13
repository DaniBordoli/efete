const Transaction = require("../models/transactions");
require("../config/db");

const charmander = {
    amount: 2350,
    comissionTotal: 50,
    comissionEfete: 25,
    comissionAgent: 25,
    user: {
        "_id": "5f064320cefb0877fc05368b",
    },
    agent: {"_id" : "5f06437f5739037841c7195f"},
    originAccount: {"_id" : "5f06440f400ecf7891a2fa42"},
    destinationAccount: {"_id" : "5f06440f400ecf7891a2fa45"},

}

const bulbasaur = {
    amount: 500,
    comissionTotal: 50,
    comissionEfete: 25,
    comissionAgent: 25,
    user: {
        "_id": "5f064320cefb0877fc05368c",
    },
    agent: {"_id" :"5f06437f5739037841c7195d"},
    originAccount: {"_id" :"5f06440f400ecf7891a2fa44"},
    destinationAccount: {"_id" :"5f06440f400ecf7891a2fa42"},

}

const squirtle = {
    amount: 1000,
    comissionTotal: 50,
    comissionEfete: 25,
    comissionAgent: 25,
    user: {
        "_id": "5f064320cefb0877fc05368d",
    },
    agent: { "_id": "5f06437f5739037841c7195e" },
    originAccount: {"_id" :"5f06440f400ecf7891a2fa45"},
    destinationAccount: { "_id": "5f06440f400ecf7891a2fa44" },

}

Transaction.insertMany([charmander, bulbasaur, squirtle]).then(() => {
    console.log("Ready to go!");

    process.exit();
});



