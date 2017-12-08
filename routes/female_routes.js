var express = require('express');
var router = express.Router();
var female_queries = require('../query_models/female.js'); 

/* GET all bathrooms */
router.get('/', function(req, res, next) {
    female_queries.getAllFemales(function(err, rows){
        if (!err){
            res.json(rows); 
        }
        else{
            res.json(err); 
        }
    })
});

router.get('/:id', function(req, res, next) {
    female_queries.getFemaleByID(req.params.id, function(err, rows){
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
    female_queries.addFemale(req.body, function(err, rows) {
        if(!err){
            res.json(rows); 
        }
        else{
            res.json(err); 
        }
    })
}); 

// router.put('/:id', function(req, res, next) {
//     female_queries.updateRating(req.params.id, req.body, function(err, rows) {
//         if(!err){
//             res.json(rows); 
//         }
//         else{
//             res.json(err); 
//         }
//     })
// }); 

router.delete('/:id', function(req, res, next) {
    female_queries.deleteFemale(req.params.id, function(err, count) {
        if (!err){
            res.json(count); 
        }
        else {
            res.json(err); 
        }
    })
}); 

module.exports = router;