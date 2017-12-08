var data = require('../db.js'); 

var Female = {
    getAllFemales: function(callback) {
        return data.query("SELECT * from FEMALE", callback); 
    }, 

    getFemaleByID: function(Id,callback) {
        return data.query("SELECT * from FEMALE WHERE id=?", [Id], callback); 
    }, 

    addFemale: function(Female, callback) {
        return data.query("INSERT INTO FEMALE VALUES(?,?)", [Female.id, Female.feminine], callback); 
    },
    
    deleteFemale: function(Id, callback) {
        return data.query("DELETE FROM FEMALE WHERE id=?", [Id], callback); 
    }
}

module.exports = Female;