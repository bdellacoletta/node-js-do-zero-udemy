const fs = require("fs");

var usuarios = [];

function read(item, file) {
  return item = JSON.parse(fs.readFileSync(file));
}

function create(array, nome, idade, valor, chave) {
  array.push({
    "nome" : nome,
    "idade" : idade,
    "valor" : valor,
    "chave" : chave
  },);
}

function save(file, array) {
  fs.writeFileSync(file, JSON.stringify(array));
}

function del(array, nome) {
  for (let index = 0; index < array.length; index++){

    if(nome === array[index].nome){
      array.splice(index, 1)
    }
  }
}

usuarios = read(usuarios, "bd.json")

del(usuarios, "Bosco");

console.log(usuarios);
