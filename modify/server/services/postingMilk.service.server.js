/**
 * Created by Chuhan on 4/14/18.
 */
var app = require("../../express");

var database = require("../models/database");

app.post("/postmilk", createPostmilk);
app.get("/postmilk", getPostmilkByDate);


// posting_milk jason file is the body of api url
function createPostmilk(req,res) {
    var latco = req.body;
    database
        .createPostmilk(postmilk)
        .then(function (list) {
            res.json(list);
        });
}

// api url format: /posting_milk?date="+date_value
function getPostmilkByDate(req,res){
    var date = req.query.date;
    database
        .getPostmilkByDate(date)
        .then(function (postmilk) {
            if (postmilk === null)
                return res.send("0");
            else
                return res.json(postmilk);

        }, function (err) {
            return res.sendStatus(404).send(err);
        });
}
