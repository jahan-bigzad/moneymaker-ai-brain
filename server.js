const express = require("express");
const app = express();

app.use(express.json());

// ROOT ROUTE (THIS FIXES Cannot GET /)
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
