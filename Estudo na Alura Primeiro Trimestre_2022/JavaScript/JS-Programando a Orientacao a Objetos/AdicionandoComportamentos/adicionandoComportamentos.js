class Cliente {
    nome;
    cpf;

}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;  
    }
}


const cliente1 = new Cliente();
cliente1.nome = "Matheus";
cliente1.cpf = 09827571907;


const cliente2 = new Cliente();
cliente2.nome = "Ricardo";
cliente2.cpf = 01321234527;

const contaCorrenteMatheus = new ContaCorrente();
contaCorrenteMatheus.agencia = 1001;

contaCorrenteMatheus.depositar(100);
contaCorrenteMatheus.depositar(-100);
contaCorrenteMatheus.depositar(100);
const valorSacado = contaCorrenteMatheus.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteMatheus);