var express = require('express');
var router = express.Router();
var rating_queries = require('../query_models/rating.js'); 

/* GET all bathrooms */
router.get('/', function(req, res, next) {
    rating_queries.getAllRatings(function(err, rows){
        if (!err){
            res.json(rows); 
        }
        else{
            res.json(err); 
        }
    })
});

router.get('/:id', function(req, res, next) {
    rating_queries.getRatingByID(req.params.id, function(err, rows){
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
router.get('/bathroomrating/:id', function(req, res, next) {
    rating_queries.getRatingByBathroomID(req.params.id, function(err,rows){
        if (!err){
            res.json(rows); 
            console.log("test2");  
        }
        else{
            res.json(err); 
        }
    })
}); 

router.post('/', function(req, res, next) {
    rating_queries.addRating(req.body, function(err, rows) {
        if(!err){
            res.json(rows); 
        }
        else{
            res.json(err); 
        }
    })
}); 

router.put('/:id', function(req, res, next) {
    rating_queries.updateRating(req.params.id, req.body, function(err, rows) {
        if(!err){
            res.json(rows); 
        }
        else{
            res.json(err); 
        }
    })
}); 

router.delete('/:id', function(req, res, next) {
    rating_queries.deleteRating(req.params.id, function(err, count) {
        if (!err){
            res.json(count); 
        }
        else {
            res.json(err); 
        }
    })
}); 

module.exports = router;