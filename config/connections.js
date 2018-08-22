var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: process.env.DBHOST || "localhost", 
    user: process.env.DBUSER || "root",
    password: process.env.DBPASSWORD || "root",
    port: 3307, 
    database: process.env.DB || "burgers_db",
    multipleStatements: true
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our Orm to use.
module.exports = connection;