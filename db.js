var mySQL = require('mysql'); 
var connect = mySQL.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'pass',
    database: 'peeorflee' 
}); 

connect.connect(); 

module.exports = connect