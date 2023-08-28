const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();

const bodyparser = require("body-parser");
const cors = require("cors");
const router = require("./routes/login")
connectDB();

app.use(express.json({ extended: true }));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
//app.use(express.static(path.resolve(__dirname, "tmp")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env._fronturl);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  next();
});
app.use(
    cors({
      origin: process.env._fronturl,
    })
  );

const PORT = process.env.PORT || 8000;

app.use('/user',router)


app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});