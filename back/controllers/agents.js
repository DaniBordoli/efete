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

const changeDailyAmount = (req, res) => {
  let id = req.body.id;
  Agent.findOne({ _id: id }).then((agent) => {
    agent
      .updateOne({
        dailyAmount: agent.dailyAmount - req.body.amount,
      })
      .then(() => {
        res.sendStatus(200);
      });
  });
};

module.exports = {
  editProfileAgent,
  editDailyAmount,
  changeDailyAmount,
};
