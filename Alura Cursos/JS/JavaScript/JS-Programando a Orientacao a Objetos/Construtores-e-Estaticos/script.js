import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"


const cliente1 = new Cliente("Matheus", 9827571907);
const cliente2 = new Cliente("Ricardo", 9827571907);

const contaCorrenteMatheus = new ContaCorrente(1001, cliente1);
contaCorrenteMatheus.depositar(500);
contaCorrenteMatheus.sacar(100)


contaCorrenteMatheus.depositar(500);
const conta2 = new ContaCorrente(102, cliente1);


let valor = 200;
contaCorrenteMatheus.tranferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);