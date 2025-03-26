const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // Tillåter API:et att anropas från frontend
app.use(express.json()); // För att hantera JSON-data

// Dummy-data med spartips
const savingtips = [
  { id: 1, title: "Gör en budget", description: "Planera dina utgifter varje månad." },
  { id: 2, title: "Laga mat hemma", description: "Att äta ute är dyrt, laga mat istället!" },
  { id: 3, title: "Sälj saker du inte behöver", description: "Tjäna extra pengar genom att sälja oanvända saker." }
];

// GET - Hämta alla spartips
app.get("/api/savingtips", (req, res) => {
  res.json(savingtips);
});

// GET - Hämta ett spartips med ID
app.get("/api/savingtips/:id", (req, res) => {
  const tip = savingtips.find(t => t.id === parseInt(req.params.id));
  if (!tip) return res.status(404).json({ message: "Spartips hittades inte" });
  res.json(tip);
});

// Starta servern
app.listen(PORT, () => console.log(`🚀 Servern körs på http://localhost:${PORT}`));
