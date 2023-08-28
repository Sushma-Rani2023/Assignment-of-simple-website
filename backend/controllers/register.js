const bcrypt = require("bcrypt");
const User = require('../model/user')

require("dotenv").config();



const RegisterUser = async (req,res) => {

    console.log("$$$$$$$$$$$$$$$$$",req.body)
    const {firstName, lastName, email , password ,gender,age} = req.body;
    if( !firstName || !lastName || !email || !password || !gender, !age){
        console.log('Not all found')
       return res.status(400).json({
            message : "All fields are required"
        })
    }
    
    const Existingemail = await User.findOne({ email });
    if(Existingemail){
        
       return  res.status(406).json({
            message : "Email already exist"
        })
    }

    const saltRound = parseInt(process.env.SALTROUND);
    console.log(saltRound)
    const hashedPassword = await bcrypt.hash(password, saltRound);
    console.log(hashedPassword)
    const user = new User({
        firstName,
        lastName,
        email,
        password : hashedPassword,
        gender,
        age
       })
     await user.save()
    .then(result =>{
        res.status(200).json({
            newuser : result
        })
     })
     .catch(err => {
        res.status(500).json({
            error:err
        })
     })
}

  module.exports = { RegisterUser };