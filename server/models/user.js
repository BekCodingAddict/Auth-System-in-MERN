const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  fristName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "1d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    fristName: Joi.string().required().label("FristName"),
    lastName: Joi.string().required().label("FristName"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().require().level("Password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
