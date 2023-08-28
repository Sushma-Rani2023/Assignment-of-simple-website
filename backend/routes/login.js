const express = require("express");
const {RegisterUser} =require('../controllers/register')
const login = require('../controllers/login')
const authorization=require('../middleware/authorisation')
const router = express.Router();
router.post("/register", RegisterUser);
router.post("/login",login)
module.exports = router