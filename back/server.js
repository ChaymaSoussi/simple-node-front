const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Autoriser les requêtes CORS
app.use22(cors());

app.get("/api/message", (req, res) => {
  res.json({ message: "Bonjour depuis le serveur!!! ! 👋" });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
