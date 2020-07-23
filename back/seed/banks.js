const Bank = require("../models/banks");
require("../config/db");

const galicia = {
  entityNumber: 007,
  nameEntity: "Banco Galicia",
};

const nacion = {
    entityNumber: 011,
    nameEntity: "Banco Nacion",
  };

const provincia = {
    entityNumber: 014,
    nameEntity: "Banco Provincia",
  };
  
const china = {
    entityNumber: 015,
    nameEntity: "Bank of China",
  };

const citibank = {
    entityNumber: 016,
    nameEntity: "Citibank",
  };

const bbva = {
    entityNumber: 017,
    nameEntity: "Banco BBVA",
  };

const superville = {
    entityNumber: 027,
    nameEntity: "Banco Superville",
  };

  const santander = {
    entityNumber: 072,
    nameEntity: "Banco Santander",
  };


Bank.insertMany([galicia, nacion, provincia, china, citibank, bbva, superville, santander]).then(() => {
  console.log("Ready to go!");

process.exit();
});
