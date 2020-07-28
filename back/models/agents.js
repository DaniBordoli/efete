const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var agentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cuil: {
    type: String,
    default: false,
  },
  dailyAmount: {
    type: Number,
    default: 0,
  },
  imageUrl: {
    type: String,
    default: "",
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

const Agent = mongoose.model("agents", agentSchema);
module.exports = Agent;
