const read = require("readline-sync")

var nome = "Branca";
var idade = 29;
var chave_pix = 12345678;
var valor_em_conta = 100;

function mostrar_dados(){
  console.log("---------------");
  console.log("Nome: " + nome);
  console.log("---------------");
  console.log("Idade: " + idade);
  console.log("---------------");
  console.log("Chave pix: " + chave_pix);
  console.log("---------------");
  console.log("Valor em conta: " + valor_em_conta);
  console.log("---------------");
}

function add_valor(valor) {
  valor_em_conta += valor;
  console.log(`valor em conta: R$ ${valor_em_conta}`);
}

function sub_valor(valor) {
  valor_em_conta -= valor;
  console.log(`valor em conta: R$ ${valor_em_conta}`);
}

function mudar_chave(chave) {
  chave_pix = chave;
  console.log(`Nova chave pix: ${chave_pix}`);
}

var loop = true;
while (loop){
  read.question("Escolha um número ");
}
