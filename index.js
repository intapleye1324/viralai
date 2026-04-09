const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// TESTE ROTA IA
app.post("/ia", (req, res) => {
  const pergunta = req.body.pergunta;

  res.json({
    resposta: "Teste OK: " + pergunta
  });
});

// RAIZ
app.get("/", (req, res) => {
  res.send("IA rodando 🚀");
});

app.listen(process.env.PORT || 3000);
