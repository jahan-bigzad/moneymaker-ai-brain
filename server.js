const express = require("express");
const app = express();

app.use(express.json());

app.post("/ai", (req, res) => {
  const userText = req.body.text || "Nothing sent";

  // simple AI brain (echoes back what user says)
  res.json({
    reply: "AI received: " + userText
  });
});

app.get("/", (req, res) => {
  res.send("AI brain running on port 3000");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
