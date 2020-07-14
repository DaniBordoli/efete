const Agent = require("../models/agents");

const editProfileAgent = (req, res) => {
  let id = req.body.id;
  Agent.findByIdAndUpdate(id, req.body, { new: true }).then((agentProfile) => {
    res.status(200).send(agentProfile);
  });
};

const editDailyAmount = (req, res) => {
  let id = req.body.id;
  Agent.findByIdAndUpdate(id, req.body, { new: true }).then((agentProfile) => {
    res.status(200).send(agentProfile);
  });
};

module.exports = {
  editProfileAgent,
  editDailyAmount,
};
