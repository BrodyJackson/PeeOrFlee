var data = require('../db.js'); 

var User = {
    getAllUsers: function(callback) {
        return data.query("SELECT * from USER", callback); 
    }, 

    getUserByID: function(Id,callback) {
        return data.query("SELECT * from USER WHERE id=?", [Id], callback); 
    }, 

    addUser: function(User, callback) {
        return data.query("INSERT INTO USER VALUES(?,?,?,?)", [User.id, User.name, User.password, User.admin], callback); 
    },
    
    deleteUser: function(Id, callback) {
        return data.query("DELETE FROM USER WHERE id=?", [Id], callback); 
    }
}

module.exports = User; 