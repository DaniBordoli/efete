const User = require("../models/users");


const editProfileUser = (req, res) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { new: true })
    .then((userProfile) => {
        res.status(200).send(userProfile);
    });
};

module.exports = {
   editProfileUser,
};
