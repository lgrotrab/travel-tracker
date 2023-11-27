import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Em construção</h1>");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
