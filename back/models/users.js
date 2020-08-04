const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const { isEmail } = require("validator");
const SALT_WORK_FACTOR = 10;

var userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifCode: {
    type: Number,
    default: 0,
  },
  dniFront: {
    type: String,
    default: "https://i.imgur.com/Z0869Hm.jpg",
  },
  dniBack: {
    type: String,
    default: "https://i.imgur.com/Z0869Hm.jpg",
  },
  dni: {
    type: Number,
  },
  username: {
    type: String,
    required: true,
    validate: [isEmail, "invalid email"],
  },
  password: { type: String, required: true },
  profilePicture: {
    type: String,
    default:
      "https://www.festivalclaca.cat/imgfv/b/500-5009697_no-profile-picture-icon-circle.png",
  },
  role: { type: String, enum: ["user", "agent", "admin"], default: "user" },
  processVerification: {
    type: Boolean,
    default: false,
  },
  validatedIdentity: {
    type: Boolean,
    default: false,
  },

  gender: {
    type: String,
    required: true,
  },

  tcn: {
    type: String,
  },
});

userSchema.pre("save", async function save(next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.validatePassword = async function validatePassword(data) {
  const result = await bcrypt.compare(data, this.password);
  return result;
};

const User = mongoose.model("users", userSchema);

module.exports = User;
