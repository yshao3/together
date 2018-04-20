/*
 * Created by Yijun on 4/14/18.
 */
var app = require("../../express");
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database : "QualityMilkDB"
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
web.prototype.get_Teat = function(date1,date2,callback){
    let sql = "select farm_id, date, staff_id, milker_id, isBefore, clean, deep, small_dirt, large_dirt " +
                "from cleanliness_fact where date >= date1 and date <= date2;";
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

web.prototype.get_udder = function(date1,date2,callback){
    let sql = "select group_id, staff_id, date, farm_id, free, slightly, moderate, heavy " +
                "from udder_hygiene_fact where date >= date1 and date <= date2;";
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

web.prototype.get_unit = function(date1,date2,callback){
    let sql = "select farm_id, date, good, bad " +
                "from unit_fact where date >= date1 and date <= date2;";
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


web.prototype.get_strip = function(date1,date2,callback){
    let sql = "select staff_id, date, farm_id, ML, Stall_no, isBalanced " +
                "from strip_fact where date >= date1 and date <= date2;";
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

web.prototype.get_post = function(date1,date2,callback){
    let sql = "select staff_id, farm_id, group_id, date, " +
              "LH_skin_condition, LH_color, LH_swelling, LH_hardness, LH_end_score, " +
              "LF_skin_condition, LF_color, LF_swelling, LF_hardness, LF_end_score, " +
              "RH_skin_condition, RH_color, RH_swelling, RH_hardness, RH_end_score, " +
              "RF_skin_condition, RF_color, RF_swelling, RF_hardness, RF_end_score, " +
                "from postmilking_fact where date >= date1 and date <= date2;";
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

web.prototype.get_lacto = function(date1,date2,callback){
    let sql = "Select farm_id, dates, " +
                "parlor_type, pre_milking,procedures,milking_frequency,staff_id,prep, " +
                "milking_routine, total_milk, herd_size,size,dip_contact_time, lag_contact_stimulate, unit_on_time " +
                "from  lactocoder_fact " +
                "where date >= date1 and date <= date2;";
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
