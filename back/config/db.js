const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/efete", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
