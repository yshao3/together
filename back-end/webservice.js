/*
 * QPMS prject
 */
var database = require("./database");
module.exports = function(app){

    app.get("/latco", getLatcoByDate);
    app.get("/teat", getTeatByDate);
    app.get("/udder", getUdderByDate);
    app.get("/unit", getUnitByDate);
    app.get("/strip", getStripByDate);
    app.get("/post", getPostByDate);
    app.get("/",login);
    //login
    function login(req,res){
    var username = req.query.username;
    var password = req.query.password;
    database.login(username, password, function(err, r){
        if (err){
            throw err;
        }
        if (r.length !=0){
            res.json(true);}
        else{
            res.json(false);
            }
        });
    }
    //get from different tables
    function getLatcoByDate(req,res){
    var date1 = req.query.date1;
    var date2 = req.query.date2;
    database.get_latco(date1,date2, function(err, latco){
        if (err){
            throw err;
        }
        
        res.json(latco);
    });
    }
    function getTeatByDate(req,res){
    var date1 = req.query.date1;
    var date2 = req.query.date2;
    database.get_teat(date1,date2, function(err, teat){
        if (err){
            throw err;
        }
        console.log(teat);
        res.json(teat);
    });
    }
    function getUdderByDate(req,res){
    var date1 = req.query.date1;
    var date2 = req.query.date2;
    database.get_udder(date1,date2, function(err, udder){
        if (err){
            throw err;
        }
        console.log(udder);
        res.json(udder);
    });
    }
    function getUnitByDate(req,res){
    var date1 = req.query.date1;
    var date2 = req.query.date2;
    database.get_unit(date1,date2, function(err, unit){
        if (err){
            throw err;
        }
        console.log(unit);
        res.json(unit);
    });
    }
    function getStripByDate(req,res){
    var date1 = req.query.date1;
    var date2 = req.query.date2;
    database.get_strip(date1,date2, function(err, strip){
        if (err){
            throw err;
        }
        console.log(strip);
        res.json(strip);
    });
    }
    function getPostByDate(req,res){
    var date1 = req.query.date1;
    var date2 = req.query.date2;
    database.get_post(date1,date2, function(err, post){
        if (err){
            throw err;
        }
        console.log(post);
        res.json(post);
    });
    }


}



