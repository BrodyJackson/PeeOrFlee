var data = require('../db.js'); 

var Bathroom = {
    getAllBathrooms: function(callback) {
        return data.query("Select * from BATHROOM", callback); 
    }

    //add more queries here 
}

module.exports = Bathroom; 