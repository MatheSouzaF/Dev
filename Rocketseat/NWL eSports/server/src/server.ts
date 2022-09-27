import express, { request, response } from "express";

const app = express();

app.get('/games', (request,response) =>{
  return response.json([]);
})

app.post('/ads', (request, response)=> {
  return response.json([]);
})

app.get("/ads", (request, response) => {
  return response.json([
    {id: 1, name: 'Anúncio 1'},
    {id: 2, name: 'Anúncio 2'},
    {id: 3, name: 'Anúncio 3'},
    {id: 3, name: 'Anúncio 3'},
    {id: 3, name: 'Anúncio 3'}
  ]);
});

app.listen(3333);
