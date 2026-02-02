const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/ask", (req, res) => {
  const question = req.body.question;

  res.json({
    answer: "MoneyMaker AI received: " + question
  });
});

app.listen(PORT, () => {
  console.log("MoneyMaker AI brain running on port 3000");
});
