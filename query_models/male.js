var data = require('../db.js'); 

var Male = {
    getAllMales: function(callback) {
        return data.query("SELECT * from MALE", callback); 
    }, 

    getMaleByID: function(Id,callback) {
        return data.query("SELECT * from MALE WHERE id=?", [Id], callback); 
    }, 

    addMale: function(Male, callback) {
        return data.query("INSERT INTO MALE VALUES(?,?)", [Male.id, Male.urinals], callback); 
    },
    
    deleteMale: function(Id, callback) {
        return data.query("DELETE FROM MALE WHERE id=?", [Id], callback); 
    }
}

module.exports = Male;