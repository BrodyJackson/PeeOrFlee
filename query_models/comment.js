var data = require('../db.js'); 

var Comment = {
    getAllComments: function(callback) {
        return data.query("SELECT * from COMMENT", callback); 
    }, 

    getCommentByRatingID: function(Id,callback) {
        return data.query("SELECT * from COMMENT WHERE id=?", [Id], callback); 
    }, 

    addComment: function(Comment, callback) {
        return data.query("INSERT INTO COMMENT VALUES(?,?,?,?)", [Comment.id, Comment.comment, Comment.date, Comment.ordering], callback); 
    },
    
    deleteComment: function(Id, callback) {
        return data.query("DELETE FROM COMMENT WHERE id=?", [Id]); 
    }
}

module.exports = Comment; 