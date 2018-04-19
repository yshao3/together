const express = require('express');
var web = require("../model/web");
var api = express();

/**
 * Created by Yijun on 4/14/18.
 */
var app = require("../express");

var database = require("../model/database");

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

// api url format: /latco?date_start="+date_value
function getLatcoByDate(req,res){
    var date1 = req.params.date_start;
    var date2 = req.params.date_end;
    console.log(date1);
    database.get_Teat(date1, date2, function(err, teat){
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
