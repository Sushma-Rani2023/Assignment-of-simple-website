
const mysql = require('mysql2');

const connectDB = mysql.createPool({
  host: 'srv1021.hstgr.io',
  user: 'u394360389_Sushma',
  password: 'LS1setup@789',
  database: 'u394360389_Test'
})

connectDB.execute("SELECT * FROM User;",function(err,result){
if (err)
throw err;
console.log(result)
})


module.exports = connectDB.promise();