/**
 * Created by Yijun on 4/14/18.
 */
var app = require("../../express")
var bodyParser = require('body-parser');
// app.use(bodyParser.json());
var database = require("../models/database");
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post("/latco", createLatco);
app.get("/latco", getLatcoByDate);


// latco jason file is the body of api url
function createLatco(req,jsonParser,res) {
    console.log("I'm here");
    var latco = req.body;
    console.log(latco);
    database
        .createLatco(latco)
        .then(function (list) {
            res.json(list);
        });
}

// api url format: /latco?date"+date_value
function getLatcoByDate(req,res){
    var date1 = req.query.date1;
    var date2 = req.query.date2;
    database.get_Teat(date1,date2, function(err, teat){
        if (err){
            throw err;
        }
        console.log(teat);
        res.json(teat);
    });
    // database
    //     .getLatcoByDate(date)
    //     .then(
    //         function (latco) {
    //         console.log(latco);
    //         if (latco === null)
    //             return res.send("0");
    //         else
    //             return res.json(latco);

    //     }, function (err) {
    //         console.log(err);
    //         return res.sendStatus(404).send(err);
    //     });
}



