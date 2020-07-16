const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var entidadesSchema = new Schema({

    entityNumber: {
        type: Number,
        required: true,
      },
    nameEntity: {
    type: String,
    required: true,
  },
  
  
});

const Bank = mongoose.model("banks", entidadesSchema);
module.exports = Bank;
