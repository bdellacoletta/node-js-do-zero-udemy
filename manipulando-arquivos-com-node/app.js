const fs = require("fs");

var usuarios = [];

function read(array, file) {
  return array = JSON.parse(fs.readFileSync(file));
}

function create(array, nome, idade, valor, chave) {
  array.push({
    "nome" : nome,
    "idade" : idade,
    "valor" : valor,
    "chave" : chave
  },);
  update();
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
  update();
}

function update() {
  save("bd.json", usuarios);
  read(usuarios, "bd.json");
}

usuarios = read(usuarios, "bd.json")

del(usuarios, "teste");

console.log(usuarios);
