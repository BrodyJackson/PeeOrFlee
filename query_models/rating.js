var data = require('../db.js'); 

var Rating = {
    getAllRatings: function(callback) {
        return data.query("SELECT * from RATING", callback); 
    }, 

    getRatingByID: function(Id,callback) {
        return data.query("SELECT * from RATING WHERE id=?", [Id], callback); 
    }, 

    getRatingByBathroomID: function(Bthrm_ID, callback) {
        return data.query("SELECT * from RATING WHERE bthrm_id=?", [Bthrm_ID], callback); 
    }, 

    addRating: function(Rating, callback) {
        return data.query("INSERT INTO RATING VALUES(?,?,?,?,?,?)", [Rating.id, Rating.cleanliness, Rating.wait_time, Rating.user_approval, Rating.overall, Rating.bthrm_id], callback); 
    },
    
    updateRating: function(Id, Rating, callback) {
        return data.query("UPDATE RATING SET cleanliness=?, wait_time=?, user_approval=?, overall=?, bthrm_id=? WHERE id=?", [Rating.cleanliness, Rating.wait_time, Rating.user_approval, Rating.overall, Rating.bthrm_id, Id], callback); 
    }, 

    deleteRating: function(Id, callback) {
        return data.query("DELETE RATING WHERE id=?", [Id])
    }

    //add more queries here 
}

module.exports = Rating; 