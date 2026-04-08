const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = "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

app.post("/ia", async (req, res) => {
  const pergunta = req.body.pergunta;

  try {
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Você é uma IA que ajuda em Free Fire (capa, sensi) e ganhar dinheiro online."
          },
          {
            role: "user",
            content: pergunta
          }
        ]
      })
    });

    const data = await r.json();

    res.json({
      resposta: data.choices[0].message.content
    });

  } catch (e) {
    res.json({ resposta: "Erro na IA" });
  }
});

app.get("/", (req, res) => {
  res.send("ViralAI rodando 🚀");
});

app.listen(process.env.PORT || 3000);
