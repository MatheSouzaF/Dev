// Ser autenticavel significa ter a método autenticar

export class SistemaAutenteicacao{
    static login(autenticavel, senha){
        if(SistemaAutenteicacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
         autenticavel.autenticar instanceof Function
    }
}