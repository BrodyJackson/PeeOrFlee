//routes that are used for the /bathroom URL, we will put things in here such as GET,POST,PUT which will call specific queries that we define in the models folder
//right now I have just set / (which is the defalt) to get all the bathrooms, so I could test it worked
//Examples for more specific routing can be easily found online, but I'll add more so that it makes sense 

var express = require('express');
var router = express.Router();
var bathroom_queries = require('../query_models/bathroom.js'); 

/* GET all bathrooms */
router.get('/', function(req, res, next) {
  bathroom_queries.getAllBathrooms(function(err, rows){
      if (!err){
          res.json(rows); 
      }
      else{
          res.json(err); 
      }
  })
});

module.exports = router;