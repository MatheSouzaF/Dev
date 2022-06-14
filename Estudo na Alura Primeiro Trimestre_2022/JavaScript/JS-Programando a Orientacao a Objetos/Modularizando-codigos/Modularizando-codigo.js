import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Matheus";
cliente1.cpf = 9827571907;


const cliente2 = new Cliente();
cliente2.nome = "Ricardo";
cliente2.cpf = 9827571907;

const contaCorrenteMatheus = new ContaCorrente();
contaCorrenteMatheus.agencia = 1001;
contaCorrenteMatheus.cliente = cliente1;
contaCorrenteMatheus.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

let valor = 200;
contaCorrenteMatheus.tranferir(valor, conta2);

console.log("valor:", valor)
console.log(conta2);
console.log(contaCorrenteMatheus);