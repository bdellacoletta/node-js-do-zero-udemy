const express = require("express");
const app = express();

app.get("/", function(req, res){

  res.send("<h1>Hello</h1>");

});

app.get("/user", function(req, res) {

  res.send("<h1>User</h1>");

});

app.listen(8080);
