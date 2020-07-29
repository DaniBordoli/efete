const Agent = require("../models/agents");
const User = require("../models/users");

const editProfileAgent = (req, res) => {
  let id = req.body._id;
  Agent.updateOne({ _id: id }, req.body, { new: true })
    .then(() => {
      return Agent.findById(id);
    })
    .then((agentProfile) => {
      res.status(200).send(agentProfile);
    });
};

const editDailyAmount = (req, res) => {
  let id = req.body._id;
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
const createAgent = (req, res) => {
  console.log("REQ.BODY.AGENTE:::::::::::", req.body);
  Agent.create(req.body)
    .then((agent) => {
      User.findOne({ _id: req.body.user }).then((user) => {
        user
          .updateOne({ role: "agent" })
          .then(() => {
            return User.findOne({ _id: req.body.user });
          })
          .then((userUpdated) => {
            res.status(201).json(userUpdated);
          });
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const getAllUsers = (req, res) => {
  Agent.find().then((agents) => {
    res.json(agents);
  });
};
const getAgent = (req, res) => {
  let userId = req.params.id;
  Agent.findOne({ user: userId }).then((agent) => {
    res.status(200).json(agent);
  });
};

const findAllAgentsUser = (req,res) => {
  Agent.find({user:req.params.id})
    .populate('user')
    .then((agents)=>{
      res.send(agents);
    })
    .catch ((err)=>{
      res.status(500).send(err)
    })
};

const deleteAgent = (req,res) => {
  Agent.deleteOne ({_id: req.params.id})
  .then (()=>{
    Agent.find ({user: req.params.userId})
    .populate('user')
    .then ((agents)=> {
      res.send(agents);
    })
    .catch((err)=> {
      res.status(500).send(err);
    })
  })
}




module.exports = {
  editProfileAgent,
  editDailyAmount,
  changeDailyAmount,
  createAgent,
  getAllUsers,
  getAgent,
  findAllAgentsUser,
  deleteAgent,
};
