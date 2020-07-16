const Agent = require("../models/agents");
const User = require("../models/users");


const editProfileAgent = (req, res) => {
  let id = req.body.id;
  Agent.findByIdAndUpdate(id, req.body, { new: true }).then((agentProfile) => {
    res.status(200).send(agentProfile);
  });
};

const editDailyAmount = (req, res) => {
  let id = req.body.id;
  Agent.findByIdAndUpdate(id, req.body, { new: true })
  .then((agentProfile) => {
    res.status(200).json(agentProfile);
  });
};

const createAgent = (req, res) => {
  console.log('REQ.bo', req.body) 
  Agent.create(req.body)
   .then((agent)=>{
    User.findOne({_id: req.body.user})
    .then((user)=>{
      user.updateOne({role : 'agent'})
     .then(()=>{
      return User.findOne({_id: req.body.user})})
      .then((userUpdated)=>{ console.log('userUpdated', userUpdated)
      res.status(201).json(userUpdated)
     })
    })
  }).catch((err)=>{
      res.status(500).json(err)
   })
}

const getAllUsers = (req, res) => {
  Agent.find()
  .then((agents)=>{
      res.json(agents)
  })
}

module.exports = {
  editProfileAgent,
  editDailyAmount,
  createAgent,
  getAllUsers
};
