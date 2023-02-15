const cliente = {
    nome: "Matheus",
    idade: 25,
    cpf: "12345678989",
    email: "matheus@gmail.com",
    fones: ["48984640679", "48984800718"],
    dependentes :[{
      nome: "Sara",
      parentesco:"filha",
      dataNasc: "02/03/2015"
    }]
  };


  cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"24/05/2016"
  })

  console.log(cliente)

  const ''