class Cliente {
    nome;
    cpf;
   
}

class ContaCorrente{  
    agencia;
    saldo;
}
const cliente1 = new Cliente();
cliente1.nome = "Matheus";
cliente1.cpf = 09827571907;


const cliente2 = new Cliente();
cliente2.nome = "Ricardo";
cliente2.cpf = 01321234527;

const contaCorrenteMatheus = new ContaCorrente();
contaCorrenteMatheus.saldo = 0;
contaCorrenteMatheus.agencia = 1001;
console.log(contaCorrenteMatheus.saldo);
contaCorrenteMatheus.saldo = 100;



console.log(cliente1);
console.log(cliente2);