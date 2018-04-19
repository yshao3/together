/*
 * Created by Yijun on 4/14/18.
 */
var app = require("../../express");
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database : "QMPS"
});


var web = function () {};
// database.prototype.getLatcoByDate = function(date) {
//         con.connect(function(err) {
//             if (err) throw err;
//             console.log("Connected!");
//             console.log(date);
//             con.query("select * from cleanliness_fact", function (err, result) {
//                 // if (err) throw err;
//                 if (err) callback(err,null);
//                 else callback(null,result);
//                 // console.log("Result: " + result);
//                 // console.log(setValue(result));
//                 // return result;
//             });
//             // return null;
//         });
//     };
web.prototype.get_Teat = function(date1, callback){
    let sql = "select * from cleanliness_fact where date = ? ";
    console.log(date1);
    var result = [];
    con.query(sql, [date1],function(err, res){
        if (err) return callback(err);
        if (res.length){
            for (var i = 0; i < res.length; i++){
                result.push(res[i]);
            }
        }
        callback(null, result);
    });

}
// database.prototype.get_Teat = function(date, callback){
//     let sql = "select * from cleanliness_fact where date = ?";
//     console.log(date);
//     var result = [];
//     con.query(sql, [date],function(err, res){
//         if (err) return callback(err);
//         if (res.length){
//             for (var i = 0; i < res.length; i++){
//                 result.push(res[i]);
//             }
//         }
//         callback(null, result);
//     });

// }
// database.prototype.get_Teat = function(date, callback){
//     let sql = "select * from cleanliness_fact where date = ?";
//     console.log(date);
//     var result = [];
//     con.query(sql, [date],function(err, res){
//         if (err) return callback(err);
//         if (res.length){
//             for (var i = 0; i < res.length; i++){
//                 result.push(res[i]);
//             }
//         }
//         callback(null, result);
//     });

// }
// database.prototype.get_Teat = function(date, callback){
//     let sql = "select * from cleanliness_fact where date = ?";
//     console.log(date);
//     var result = [];
//     con.query(sql, [date],function(err, res){
//         if (err) return callback(err);
//         if (res.length){
//             for (var i = 0; i < res.length; i++){
//                 result.push(res[i]);
//             }
//         }
//         callback(null, result);
//     });

// }
// database.prototype.get_Teat = function(date, callback){
//     let sql = "select * from cleanliness_fact where date = ?";
//     console.log(date);
//     var result = [];
//     con.query(sql, [date],function(err, res){
//         if (err) return callback(err);
//         if (res.length){
//             for (var i = 0; i < res.length; i++){
//                 result.push(res[i]);
//             }
//         }
//         callback(null, result);
//     });

// }
// database.prototype.get_Teat = function(date, callback){
//     let sql = "select * from cleanliness_fact where date = ?";
//     console.log(date);
//     var result = [];
//     con.query(sql, [date],function(err, res){
//         if (err) return callback(err);
//         if (res.length){
//             for (var i = 0; i < res.length; i++){
//                 result.push(res[i]);
//             }
//         }
//         callback(null, result);
//     });

// }
// database.prototype.get_Teat = function(date, callback){
//     let sql = "select * from cleanliness_fact where date = ?";
//     console.log(date);
//     var result = [];
//     con.query(sql, [date],function(err, res){
//         if (err) return callback(err);
//         if (res.length){
//             for (var i = 0; i < res.length; i++){
//                 result.push(res[i]);
//             }
//         }
//         callback(null, result);
//     });

// }
module.exports = new web();
