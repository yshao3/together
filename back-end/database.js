/*
 * QPMS prject
 */
var app = require('express');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database : "QMPS"
});


var database = function () {};
//login function for both
database.prototype.login = function(username,password,callback){
    let sql = "select username from user where username = ? and password = ?;";
    var result = [];
    con.query(sql, [username, password],function(err, res){
        if (err) return callback(err);
        if (res.length){
            for (var i = 0; i < res.length; i++){
                result.push(res[i]);
            }
        }
        callback(null, result);
    });

}
// get functions for web
database.prototype.get_teat = function(date1,date2,callback){
    let sql = "select * " +
                "from cleanliness_fact where date >= Date(?) and date <= Date(?);";
    var result = [];
    con.query(sql, [date1, date2],function(err, res){
        if (err) return callback(err);
        if (res.length){
            for (var i = 0; i < res.length; i++){
                result.push(res[i]);
            }
        }
        callback(null, result);
    });

}

database.prototype.get_udder = function(date1,date2,callback){
    let sql = "select * " +
                "from udder_hygiene_fact where date >= Date(?) and date <= Date(?);";
    console.log(date1+date2);
    var result = [];
    con.query(sql, [date1, date2],function(err, res){
        if (err) return callback(err);
        if (res.length){
            for (var i = 0; i < res.length; i++){
                result.push(res[i]);
            }
        }
        callback(null, result);
    });

}

database.prototype.get_unit = function(date1,date2,callback){
    let sql = "select * " +
                "from unit_fact where date >= Date(?) and date <= Date(?)";
    console.log(date1+date2);
    var result = [];
    con.query(sql, [date1, date2],function(err, res){
        if (err) return callback(err);
        if (res.length){
            for (var i = 0; i < res.length; i++){
                result.push(res[i]);
            }
        }
        callback(null, result);
    });

}


database.prototype.get_strip = function(date1,date2,callback){
    let sql = "select * " +
                "from strip_fact where date >= Date(?) and date <= Date(?);";
    console.log(date1+date2);
    var result = [];
    con.query(sql, [date1, date2],function(err, res){
        if (err) return callback(err);
        if (res.length){
            for (var i = 0; i < res.length; i++){
                result.push(res[i]);
            }
        }
        callback(null, result);
    });

}

database.prototype.get_post = function(date1,date2,callback){
    let sql = "select * " +
                "from postmilking_fact where date >= Date(?) and date <= Date(?);";
    console.log(date1+date2);
    var result = [];
    con.query(sql, [date1, date2],function(err, res){
        if (err) return callback(err);
        if (res.length){
            for (var i = 0; i < res.length; i++){
                result.push(res[i]);
            }
        }
        callback(null, result);
    });

}

database.prototype.get_lacto = function(date1,date2,callback){
    let sql = "Select * " +
                "from  lactocoder_fact " +
                "where dates >= Date(?) and dates <= Date(?);";
    console.log(date1+date2);
    var result = [];
    con.query(sql, [date1, date2],function(err, res){
        if (err) return callback(err);
        if (res.length){
            for (var i = 0; i < res.length; i++){
                result.push(res[i]);
            }
        }
        callback(null, result);
    });

}
// post functions for mobile
database.prototype.post_teat = function(json, callback){
    let sql = "insert into cleanliness_fact (staff, milker, " +
                    "date, farm, isBefore, clean, dip_present, small_dirt, large_dirt)" +
                    "values ?";
    // var temp = [];
    // var array = [];
    // for (i in json){
    //     temp = [];
    //     for (var key in json[i]){
    //         temp.push(json[i][key]);
    //     }
    //     array.push(temp);
    // }
    con.query(sql,[json], function(err, res){
        if (err) return callback(err);
        callback(null, res);
    });
}


database.prototype.post_udder = function(json, callback){
    let sql = "insert into udder_hygiene_fact(group, staff,date,farm,clean,slightly_dirt,moderate_dirt,cake_on_dirt)" +
                    "values ?";

    con.query(sql,[json], function(err, res){
        if (err) return callback(err);
        callback(null, res);
    });
}

database.prototype.post_unit = function(json, callback){
    let sql = "insert into unit_fact(date, farm, staff, good, bad) values ?;";

    con.query(sql,[json], function(err, res){
        if (err) return callback(err);
        callback(null, res);
    });
}


database.prototype.post_strip = function(json, callback){
    let sql = "insert into strip_fact (staff,date,farm ,ML ,Stall_no,isBalanced) values ?;";

    con.query(sql,[json], function(err, res){
        if (err) return callback(err);
        callback(null, res);
    });
}

database.prototype.post_post = function(json, callback){
    let sql = "insert into postmilking_fact(staff, farm, group, date, LH_skin_condition," +
     "LH_color, LH_swelling, LH_hardness, LH_end_score, LF_skin_condition, LF_color, LF_swelling," +
    "LF_hardness, LF_end_score, RH_skin_condition, RH_color, RH_swelling, RH_hardness," +
     "RH_end_score, RF_skin_condition, RF_color, RF_swelling, RF_hardness, RF_end_score) values ?;";

    con.query(sql,[json], function(err, res){
        if (err) return callback(err);
        callback(null, res);
    });
}

database.prototype.post_lacto = function(json, callback){
    let sql = "insert into lactocoder_fact (farm_id, date, parlor_type,size,no_operators,pre_milking,procedures," +
                    "prep,herd_size,milking_frequency,milking_routine,cow_name, dip_contact_time," +
                    "lag_contact_stimulate,unit_on_time,total_milk,remark) " +
                    "values ?";

    con.query(sql,[json], function(err, res){
        if (err) return callback(err);
        callback(null, res);
    });
}

module.exports = new database();
