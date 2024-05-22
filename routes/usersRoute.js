const router = require("express").Router();
const User = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register new users
router.post("/register", async (req, res) => {
  try {
    const isUserExist = await User.findOne({ email: req.body.email });
    if (isUserExist) {
      return res.send({
        message: "User already Signed Up!",
        success: false,
        data: null,
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      message: "User registration has been finished!",
      success: true,
      data: null,
    });
  } catch (error) {
    res.send({
      message: error.message,
      sucess: false,
      data: null,
    });
  }
});

module.exports = router;
