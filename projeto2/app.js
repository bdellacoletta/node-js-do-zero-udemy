const fs = require("fs");

var usuarios = [];

usuarios = JSON.parse(fs.readFileSync("bd.json"));

console.log(usuarios);
