const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var transactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  comissionTotal: {
    type: Number,
    required: true,
  },
  comissionEfete: {
    type: Number,
    required: true,
  },
  comissionAgent: {
    type: Number,
    required: true,
  },
  originAccount: {
    type: Number,
    default: false,
  },
  destinationAccount: {
    type: Number,
    default: false,
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  agent: [
    {
      type: Schema.Types.ObjectId,
      ref: "agents",
    },
  ],
});

const Transaction = mongoose.model("transactions", transactionSchema);
module.exports = Transaction;
