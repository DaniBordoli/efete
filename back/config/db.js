const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/efete", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(err=>console.log(err))
