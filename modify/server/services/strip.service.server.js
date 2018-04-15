/**
 * Created by Chuhan on 4/14/18.
 */
var app = require("../../express");

var database = require("../models/database");

app.post("/strip", createStrip);
app.get("/strip", getStripByDate);


// strip jason file is the body of api url
function createStrip(req,res) {
    var strip = req.body;
    database
        .createStrip(strip)
        .then(function (list) {
            res.json(list);
        });
}

// api url format: /strip?date="+date_value
function getStripByDate(req,res){
    var date = req.query.date;
    database
        .getStripByDate(date)
        .then(function (strip) {
            if (strip === null)
                return res.send("0");
            else
                return res.json(strip);

        }, function (err) {
            return res.sendStatus(404).send(err);
        });
}
