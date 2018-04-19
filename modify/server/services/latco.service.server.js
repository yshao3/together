/**
 * Created by Yijun on 4/14/18.
 */
var app = require("../../express");

var database = require("../models/database");

app.post("/latco", createLatco);
app.get("/latco", getLatcoByDate);


// latco jason file is the body of api url
function createLatco(req,res) {
    var latco = req.body;
    database
        .createLatco(latco)
        .then(function (list) {
            res.json(list);
        });
}

// api url format: /latco?date"+date_value
function getLatcoByDate(req,res){
    var date1 = req.query.date;

    console.log(date1);
    database.get_Teat(date1, function(err, teat){
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



