import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";    
import {SistemaAutenteicacao} from "./SistemaAutenteicacao.js"
const diretor = new Diretor("Matheus", 10000, 12103456789)
diretor.castratarSenha("12345")

const gerente = new Gerente("Roger", 5000, 12345678987)
gerente.castratarSenha("1234")

const cliente = new Cliente("Sophia", 12345698745, "456")
const gerenteEstaLogado = SistemaAutenteicacao.login(gerente, "1234");
const diretorEstaLogado = SistemaAutenteicacao.login(diretor, "12345");

const clientEstaLogado = SistemaAutenteicacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clientEstaLogado);