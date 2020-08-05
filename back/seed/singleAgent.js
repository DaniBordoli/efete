const Agent = require("../models/agents");
require("../config/db");

const charmander = {
  name: "Kiosko",
  address:
    "Coronel Lorenzo Barcala, Ituzaingó, Buenos Aires Province, Argentina",
  cuil: "273656928",
  ubicacion: { latitude: -34.64248919999999, longitude: -58.676052 },
  user: {
    _id: "5f2b221aa67f004137125dda",
  },
};

Agent.insertMany([charmander]).then(() => {
  console.log("Ready to go!");
});
