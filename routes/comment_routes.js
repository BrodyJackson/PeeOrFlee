var express = require('express');
var router = express.Router();
var rating_queries = require('../query_models/comment.js'); 

/* GET all bathrooms */
router.get('/', function(req, res, next) {
    rating_queries.getAllComments(function(err, rows){
        if (!err){
            res.json(rows); 
        }
        else{
            res.json(err); 
        }
    })
});

router.get('/:id', function(req, res, next) {
    rating_queries.getCommentByRatingID(req.params.id, function(err, rows){
        if (!err){
            res.json(rows);
            console.log("test");  
        }
        else{
            res.json(err); 
        }
    })
}); 

//GET bathrooms based on building


router.post('/', function(req, res, next) {
    rating_queries.addComment(req.body, function(err, rows) {
        if(!err){
            res.json(rows); 
        }
        else{
            res.json(err); 
        }
    })
}); 

// router.put('/:id', function(req, res, next) {
//     rating_queries.updateRating(req.params.id, req.body, function(err, rows) {
//         if(!err){
//             res.json(rows); 
//         }
//         else{
//             res.json(err); 
//         }
//     })
// }); 

router.delete('/:id', function(req, res, next) {
    rating_queries.deleteComment(req.params.id, function(err, count) {
        if (!err){
            res.json(count); 
        }
        else {
            res.json(err); 
        }
    })
}); 

module.exports = router;