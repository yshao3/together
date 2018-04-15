/**
 * Created by Chuhan on 4/14/18.
 */
var app = require('./express');

// app.use(session({
//     secret: process.env.SESSION_SECRET, //'cat',//,//
//     resave: true,
//     saveUninitialized: true
// }));
// app.use(cookieParser());
// app.use(passport.initialize());
// app.use(passport.session());
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(app.express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

// require("./assignment/app");
// require("./test/app");
require("./server/app");

app.listen(port);