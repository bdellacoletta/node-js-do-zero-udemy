const express = require("express");
const app = express();

const bd = [];

app.use(express.json());

app.get("/", function(req, res){
  return res.json(bd);
});

app.post("/", function(req, res){
  const {nome, idade, saldo, chave} = req.body;
  const item = {"id": bd.length, nome, idade, saldo, chave};
  bd.push(item);
  return res.json(bd);
});

app.delete("/:id", function(req, res){
  const id = req.params;
  const item = bd.findIndex(element => element.id == id.id);
  bd.splice(item, 1);
  return res.json(bd);
});


app.listen(8080, function(){console.log("O servidor está rodando...")});
