var data = require('../db.js'); 

var Bathroom = {
    getAllBathrooms: function(callback) {
        return data.query("SELECT * from BATHROOM", callback); 
    }, 

    getBathroomByID: function(Id,callback) {
        return data.query("SELECT * from BATHROOM WHERE id=?", [Id], callback); 
    }, 

    getBathroomByBuilding: function(Building, callback) {
        console.log("test in query"); 
        return data.query("SELECT * from BATHROOM WHERE building=?", [Building], callback);
       
    }, 

    addBathroom: function(Bathroom, callback) {
        return data.query("INSERT INTO BATHROOM VALUES(?,?,?,?,?,?,?)", [Bathroom.id, Bathroom.stall_num, Bathroom.description, Bathroom.open, Bathroom.wheelchair, Bathroom.building, Bathroom.room_num], callback); 
    },
    
    updateBathroom: function(Id, Bathroom, callback) {
        return data.query("UPDATE BATHROOM SET stall_num=?, description=?, open=?, wheelchair=?, building=?, room_num=? WHERE id=?", [Bathroom.description, Bathroom.open, Bathroom.wheelchair, Bathroom.building, Bathroom.room_num, Id], callback); 
    }

    //add more queries here 
}

module.exports = Bathroom; 