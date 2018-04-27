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
    //
   function createUnit(req, res){
        var data = parseUnit(req.body);
        database.post_unit(data, function(err, r){
            if (err){
                throw err;
            }
            res.json(r);
        });
    }
    //
    function parseUnit(json){
        var res = [];
        var tmp = [];
        for i in json{
            tmp = [json[i]["date"], json[i]["farm_id"], json[i]["staff_id"], json[i]["good"], json[i]["bad"]];
            res.push(tmp);
        }
        return res;
    }
    //
    function createTeat(req, res){
        var data = parseTeat(req.body);
        database.post_teat(data, function(err, r){
            if (err){
                throw err;
            }
            res.json(r);
        });
    }
    //
    function parseTeat(json){
        var res = [];
        var tmp = [];
        for i in json {
            var isBefore = json[i]["before_after"] == "b" ? true:false;
            tmp = [json[i]["staff_id"],json[i]["milker_id"], json[i]["date"], json[i]["farm_id"], isBefore,json[i]["clean"],json[i]["deep"],json[i]["small_dirt"], json["large_dirt"]]
        }
        return res;
    }
    //
    function createLatco(req, res){
    
        var data = parseLatco(req.body);
        database.post_lacto(data, function(err, r){
            if (err){
                throw err;
            }
            res.json(r);
        });
    }
    //
    function parseLatco(json){
        var res = [];
        var tmp = [];
        for i in json{

        }

    }
    function createUdder(req, res){
    // group_id, staff_id,date,farm_id,free,slightly,moderate,heavy
    
        var data = parseUdder(req.body);
        database.post_udder(data, function(err, r){
            if (err){
                throw err;
            }
            res.json(r);
        });
    }
    //
    function parseUdder(json){
        var res = [];
        var tmp = [];
        for i in json{
            tmp = [json[i]["group_id"], json[i]["staff_id"], json[i]["date"],json[i]["farm_id"],json[i]["clean"], json[i]["slightly_dirt"],json[i]["moderately_dirt"], json[i]["caked_on_dirt"]];
            res.push(tmp);
        }
        return res;
    }
    /*staff_id, farm_id, group_id, date, LH_skin_condition," +
     "LH_color, LH_swelling, LH_hardness, LH_end_score, LF_skin_condition, LF_color, LF_swelling," +
    "LF_hardness, LF_end_score, RH_skin_condition, RH_color, RH_swelling, RH_hardness," + 
     "RH_end_score, RF_skin_condition, RF_color, RF_swelling, RF_hardness, RF_end_score */
    function createPost(req, res){
        var data = parsePost(req.body);
        database.post_post(data, function(err, r){
            if (err){
                throw err;
            }
            res.json(r);
        });
    }
    //
    function parsePost(json){
        var res = [];
        var tmp = [];
        for i in json{
            tmp = [json[i]["staff_id"], json[i]["farm_id"], json[i]["group_id"],json[i]["date"],json[i]["LH_skin_condition"], json[i]["LH_color"],json[i]["LH_swelling"], json[i]["LH_hardness"], json[i]["LH_end_score"], json[i]["LF_skin_condition"], json[i]["LF_color"],json[i]["LF_swelling"], json[i]["LF_hardness"], json[i]["LF_end_score"],
            json[i]["RH_skin_condition"], json[i]["RH_color"],json[i]["RH_swelling"], json[i]["RH_hardness"], json[i]["RH_end_score"],json[i]["RF_skin_condition"], json[i]["RF_color"],json[i]["RF_swelling"], json[i]["RF_hardness"], json[i]["RF_end_score"]];
            res.push(tmp);
        }
        return res;

    }
    function createStrip(req, res){
    
        var data = parseStrip(req.body);
        database.post_strip(data, function(err, r){
            if (err){
                throw err;
            }
            res.json(r);
        });
    }
    //staff_id,date,farm_id ,ML ,Stall_no,isBalanced
    function parseStrip(json){
        var res = [];
        var tmp = [];
        for i in json{
            tmp = [json[i]["staff_id"], json[i]["date"],json[i]["farm_id"],json[i]["ML"], json[i]["slightly_dirt"],json[i]["Stall_no"], json[i]["isBalanced"] == "balanced" ? true: false];
            res.push(tmp);
        }
        return res;
    }

}



