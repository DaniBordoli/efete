const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var sharedAgentsSchema = new Schema({
  agent: [
    {
      type: Schema.Types.ObjectId,
      ref: "agents",
    },
  ],
  username: {
    type: String,
    required: true,
  },
  access: {
    type: String,
    required: true,
  },
});

const SharedAgent = mongoose.model("sharedAgents", sharedAgentsSchema);
module.exports = SharedAgent;
