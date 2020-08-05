const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var accountSchema = new Schema({
  mainAccount: {
    type: Boolean,
    default: false,
  },

  nameEntity: [
    {
      type: Schema.Types.ObjectId,
      ref: "banks",
    },
  ],
  accountNumber: {
    type: String,
    required: true,
  },
  cbu_cvu: {
    type: String,
    required: true,
  },
  isEliminated: {
    type: Boolean,
    default: false,
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
