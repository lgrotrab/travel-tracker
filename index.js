import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send(
    "<h1>Travel tracker</h1><h2>Página em construção retorne mais tarde</h2>"
  );
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
