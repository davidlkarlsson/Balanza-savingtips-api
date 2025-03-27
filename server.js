const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // Tillåter API:et att anropas från frontend
app.use(express.json()); // För att hantera JSON-data

// Dummy-data med spartips
const savingtips = [
  { id: 1, title: "Dagens tips 🏡", description: "Visste du att du kan spara över 10 000 kr per år genom att laga mat hemma istället för att äta ute? Börja med att göra en veckomeny – din plånbok (och mage) kommer tacka dig!" },
  { id: 2, title: "Dagens tips 🍱", description: "Skippa den dyra utematen och ta med en matlåda! En lunch ute kostar ofta 100 kr, medan en hemmagjord måltid kan kosta så lite som 20 kr. Det är 400 kr sparade varje vecka!" },
  { id: 3, title: "Dagens tips 🚴", description: "Att cykla istället för att åka buss kan spara dig 500 kr i månaden – plus att du får gratis träning!" },
  { id: 4, title: "Dagens tips 🚌", description: "Har du koll på studentrabatterna för kollektivtrafik? Kolla upp ditt stads månadskort – du kan spara hundralappar varje månad!" },
  { id: 5, title: "Dagens tips ⚡", description: "Har du jämfört ditt elavtal? En snabb check kan spara dig tusenlappar per år!" },
  { id: 6, title: "Dagens tips ❌", description: "Har du prenumerationer du inte använder? Säg upp dem och spara hundralappar varje månad!" },
  { id: 7, title: "Dagens tips 📖", description: "Varför betala för dyra kursböcker när du kan låna dem gratis på biblioteket? Kolla även om äldre studenter säljer begagnade böcker för halva priset!" },
  { id: 8, title: "Dagens tips 🏷️", description: "Har du saker du inte använder? Sälj dem på Tradera, Marketplace eller Plick och tjäna extra pengar!" },
  { id: 9, title: "Dagens tips 🎸", description: "Har du en gitarr, en kamera eller kanske en klänning du inte använder? Hyr ut dina saker via Hygglo och tjäna pengar på det du redan äger!" },
  { id: 10, title: "Dagens tips 📊", description: "Visste du att du kan tjäna pengar genom att delta i undersökningar? Många företag ger presentkort eller pengar för din åsikt!" },
  { id: 11, title: "Dagens tips 💻", description: "Behöver du Office eller Adobe-program? Många universitet ger studenter gratis licenser – kolla vad som ingår i din skola!" },
  { id: 12, title: "Dagens tips 🖨️", description: "Skriv ut på skolan istället för att köpa en egen skrivare – många universitet erbjuder gratis utskrifter!" },
  { id: 13, title: "Dagens tips ☕💸", description: "Du vet väl att kaffe är jättedyrt? Om du köper en kaffe på café varje vardag för 40 kr istället för att brygga hemma för 3 kr, slösar du bort 9 250 kr per år – det är en hel semesterresa! Brygg ditt kaffe hemma och spara tusenlappar!" },
  { id: 14, title: "Dagens tips 🎓💸", description: "Många butiker, appar och tjänster erbjuder studentrabatter – allt från mat och kläder till streaming och resor. Kolla alltid om det finns en rabatt innan du betalar, det kan spara dig massor i längden!" },
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
