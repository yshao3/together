/**
 * Created by Yijun on 4/14/18.
 */
// var express = require('./express');
// app = express.createServer();
var express = require('express')
  , bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

require("./server/app");
var app = express();

app.use(bodyParser.json());
// app.use(express.bodyParser());
app.listen(port);