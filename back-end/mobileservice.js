/*
 * QPMS prject
 */

var bodyParser = require('body-parser');
// app.use(bodyParser.json());
var database = require("./database");

 

module.exports = function(app){
    
    app.use(bodyParser.json());
    app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
    })
    app.post("/latco", createLatco);
    app.post("/unit", createUnit);
    app.post("/teat", createTeat);
    app.post("/udder", createUdder);
    app.post("/post", createPost);
    app.post("/strip", createStrip);

   function createUnit(req, res){
    var data = req.body;
    database.post_unit(data, function(err, r){
        if (err){
            throw err;
        }
        res.json(r);
    });}
    function createTeat(req, res){
    console.log("I'm here");
    var data = req.body;
    database.post_teat(data, function(err, r){
        if (err){
            throw err;
        }
        res.json(r);
    });}
    function createLatco(req, res){
    console.log("I'm here");
    var data = req.body;
    database.post_latco(data, function(err, r){
        if (err){
            throw err;
        }
        res.json(r);
    });}
    function createUdder(req, res){
    console.log("I'm here");
    var data = req.body;
    database.post_udder(data, function(err, r){
        if (err){
            throw err;
        }
        res.json(r);
    });}
    function createPost(req, res){
    console.log("I'm here");
    var data = req.body;
    database.post_post(data, function(err, r){
        if (err){
            throw err;
        }
        res.json(r);
    });}
    function createStrip(req, res){
    console.log("I'm here");
    var data = req.body;
    database.post_strip(data, function(err, r){
        if (err){
            throw err;
        }
        res.json(r);
    });}

}



