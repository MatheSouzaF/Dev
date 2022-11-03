const cliente = {
  nome: "Matheus",
  idade: 25,
  cpf: "12345678989",
  email: "matheus@gmail.com",
};

const chaves = ["nome", "idade", "cpf", "email"];

// console.log(cliente[chaves[0]]);

chaves.forEach((info) => console.log(cliente[info]));
