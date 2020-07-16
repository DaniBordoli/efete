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
    res.status(200).json(agentProfile);
  });
};

const getAgent = (req, res) => {
  let userId = req.params.id;
  Agent.findOne({ user: userId }).then((agent) => {
    res.status(200).json(agent);
  });
};

module.exports = {
  editProfileAgent,
  editDailyAmount,
  getAgent,
};
