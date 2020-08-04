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
  },
  ubicacion: {
    type: Object,
  },

  dailyAmount: {
    type: Number,
    default: 0,
  },
  imageUrl: {
    type: String,
    default: "",
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

const Agent = mongoose.model("agents", agentSchema);
module.exports = Agent;
