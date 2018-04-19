/**
 * Created by Yijun on 4/14/18.
 */
var app = require('./express');

var port = process.env.PORT || 3000;

require("./server/app");

app.listen(port);