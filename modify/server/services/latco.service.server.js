/**
 * Created by Chuhan on 4/14/18.
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

// api url format: /latco?date="+date_value
function getLatcoByDate(req,res){
    var date = req.query.date;
    database
        .getLatcoByDate(date)
        .then(function (latco) {
            if (latco === null)
                return res.send("0");
            else
                return res.json(latco);

        }, function (err) {
            return res.sendStatus(404).send(err);
        });
}

