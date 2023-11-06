const userSchema = require("../model/user");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('id is********',email,password)
    let user = await userSchema.findOne({ email: email });
    console.log(user)
    bcrypt.compare(password, user.password, function (err, result) {
      
      if (result === true) {
        var token =  jwt.sign(
          { email: user.email, id: user._id, firstName: user.firstName },
          process.env.SECRETKEY
        );
        console.log('verifued')
        
        res.json({
          message: "login in",
          token,
          user
        });
      } else {
        res.json({
          message: "login in Error",
          error: err,
        });
      }
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};
module.exports = login;