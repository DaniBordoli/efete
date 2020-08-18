const { SharedAgent, User } = require("../models/index");
const { SendSharedAgent } = require("./nodemailer");

const findAllUserSharedAgents = (req, res) => {
  SharedAgent.find({ username: req.params.username })
    .populate("agent")
    .then((agents) => res.send(agents))
    .catch((err) => console.log(err));
};

const createSharedAgent = (req, res) => {
  SharedAgent.findOne({
    username: req.body.username,
    agent: req.body.agent,
  }).then((agent) => {
    if (agent)
      res.send({
        message: `El usuario ${req.body.username} ya tiene acceso a este comercio`,
      });
    else {
      User.findOne({ username: req.body.username })
        .then((user) => {
          return user.updateOne({ role: "agent" });
        })
        .then(() => {
          SharedAgent.create(req.body).then((sharedAgent) => {
            return SharedAgent.findById(sharedAgent._id)
              .populate({
                path: "agent",
                populate: {
                  path: "user",
                },
              })
              .then((agent) => {
                SendSharedAgent(agent);
                res.status(201).send(agent);
              });
          });
        });
    }
  });
};

const deleteSharedAgent = (req, res) => {
  SharedAgent.deleteMany({ agent: req.params.id }).then(() => {
    SharedAgent.find({ username: req.params.username })
      .populate("agent")
      .then((agents) => {
        res.send(agents);
      });
  });
};

const editAccess = (req, res) => {
  SharedAgent.findOne({
    username: req.body.username,
    agent: req.body.agent,
  })
    .then((agent) => {
      return agent.updateOne({ access: req.body.access });
    })
    .then(() => {
      return SharedAgent.find({ agent: req.body.agent }).then((agents) =>
        res.send(agents)
      );
    });
};

const removeAccess = (req, res) => {
  SharedAgent.deleteOne({
    username: req.params.username,
    agent: req.params.agent,
  }).then(() => {
    return SharedAgent.find({ agent: req.body.agent }).then((users) =>
      res.send(users)
    );
  });
};

const findAllAgentSharedUsers = (req, res) => {
  SharedAgent.find({ agent: req.params.id }).then((users) => res.send(users));
};

module.exports = {
  createSharedAgent,
  findAllUserSharedAgents,
  deleteSharedAgent,
  editAccess,
  findAllAgentSharedUsers,
  removeAccess,
};
