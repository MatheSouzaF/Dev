const cliente = {
    nome: "Matheus",
    idade: 25,
    cpf: "12345678989",
    email: "matheus@gmail.com",
    fones: ["48984640679", "48984800718"]
  };

  cliente.dependentes = {
    nome: "Sara",
    parentesco:"filha",
    dataNasc: "02/03/2015"
  }

  console.log(cliente)
  
  cliente.dependentes.nome = "Sara Silva"
  console.log(cliente)