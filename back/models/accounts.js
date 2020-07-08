const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var accountSchema = new Schema({
  entity: {
    type: Number,
    required: true,
  },
  nameEntity: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  cbu_cvu: {
    type: String,
    required: true,
    enum: ["cbu", "cvu"],
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
