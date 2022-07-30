const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname, "public");

app.use("/", express.static(public));

app.get("/", function(req, res){

  res.sendFile(path.join(public, "filmes.html"));

});

// criação de nova rota chamada user
// app.get("/user", function(req, res) {

//   res.send("<h1>User</h1>");

// });

app.listen(8080);
