var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var app = express();
var config = require("./config");
var port = 7000;
var expressJwt = require("express-jwt");
var morgan = require("morgan");
var userRouter = require("./routes/userRoute");





app.use(bodyParser.json());
app.use(morgan("dev"));


app.use("/auth/change-password", expressJwt({secret: config.secret}));
app.use("/auth", require("./routes/authRoutes"));

app.use("/api", expressJwt({secret: config.secret}));

app.use("/api/user", userRouter);


app.use(express.static(path.join(__dirname, "public")));
//app.use(express.static(path.join(__dirname, "uploads", "images")));



mongoose.connect(config.database, function(err){
    console.log("I am connected to mongodb");
});


app.listen(port, function(){
    console.log("App is listening on port " + port);
});