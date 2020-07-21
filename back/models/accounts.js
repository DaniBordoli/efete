const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var accountSchema = new Schema({
  
  nameEntity: [
    {
      type: Schema.Types.ObjectId,
      ref: "banks",
    },
  ],
  accountNumber: {
    type: Number,
    required: true,
  },
  cbu_cvu: {
    type: String,
    required: true,
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

const Account = mongoose.model("accounts", accountSchema);
module.exports = Account;
