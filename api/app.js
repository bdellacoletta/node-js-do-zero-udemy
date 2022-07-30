const express = require("express");
const app = express();

const bd = [];

app.use(express.json());

app.get("/", function(req, res){
  return res.json(bd);
});

app.post("/", function(req, res){
  const item = {"Nome": "Post"};
  bd.push(item);
  return res.json(bd);
});

app.listen(8080, function(){console.log("O servidor está rodando...")});
