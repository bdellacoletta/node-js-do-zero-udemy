const read = require("readline-sync")

var nome = "Branca";
var idade = 29;
var chave_pix = 12345678;
var valor_em_conta = 100;

function mostrar_dados(){
  console.clear();
  console.log("---------------------------");
  console.log("Nome: " + nome);
  console.log("---------------------------");
  console.log("Idade: " + idade);
  console.log("---------------------------");
  console.log("Chave pix: " + chave_pix);
  console.log("---------------------------");
  console.log("Valor em conta: " + valor_em_conta);
  console.log("---------------------------");
}

function add_valor(valor) {
  console.clear();
  valor_em_conta += valor;
  console.log(`valor em conta: R$ ${valor_em_conta}`);
}

function sub_valor(valor) {
  console.clear();
  valor_em_conta -= valor;
  console.log(`valor em conta: R$ ${valor_em_conta}`);
}

function mudar_chave(chave) {
  console.clear();
  chave_pix = chave;
  console.log(`Nova chave pix: ${chave_pix}`);
}

var loop = true;
while (loop){
  console.log("---------------------------");
  console.log("Bem vindo ao nosso banco!");
  console.log("O que deseja fazer?");
  console.log("1 - Mostrar seus dados");
  console.log("2 - Fazer um depósito");
  console.log("3 - Fazer um pix");
  console.log("4 - Alterar chave pix");
  console.log("---------------------------");

  var escolha = read.question("Escolha um número: ");

  if(escolha === "1"){
    mostrar_dados();
  }
  else if(escolha === "2"){
    var valor = read.question("Digite um valor: ")
    add_valor(parseInt(valor));
  }
  else if(escolha === "3"){
    var valor = read.question("Digite um valor: ")
    var pix = read.question("Digite a chave pix: ")
    sub_valor(parseInt(valor));
    console.log(`Você realizou um pix para ${pix}`);
  }
  else if(escolha === "4"){
    var chave = read.question("Digite a nova chave: ")
    mudar_chave(chave);
  }
  else {
    console.log("Opção inválida!");
  }
}
