/**
 * Created by Chuhan on 4/14/18.
 */
var app = require("../../express");
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});


module.exports = function(config) {
    this.config = config;

    // create a new latco instance in database
    this.createLatco = function(latco) {
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Result: " + result);
            });
        });
    };

    // get a latco instance by date from database
    this.getLatcoByDate = function(date) {
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Result: " + result);
            });
        });
    };

    this.createPostmilk = function(postmilk) {
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Result: " + result);
            });
        });
    };

    // get a Postmilk instance by date from database
    this.getPostmilkByDate = function(date) {
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Result: " + result);
            });
        });
    };

    this.createStrip = function(strip) {
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Result: " + result);
            });
        });
    };

    // get a Strip instance by date from database
    this.getStripByDate = function(date) {
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Result: " + result);
            });
        });
    };
    return this;
};


