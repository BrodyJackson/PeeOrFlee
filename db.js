var mySQL = require('mysql'); 
var connect = mySQL.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'pass',
    database: 'washroom_ratings' 
}); 

connect.connect(); 

module.exports = connect