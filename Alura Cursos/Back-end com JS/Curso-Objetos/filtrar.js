const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemeto(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    );
  });
}

  const filtrados = filtrarApartamentoSemComplemeto(clientes);
  console.log(filtrados);

