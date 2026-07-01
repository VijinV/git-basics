const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "about.html");
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
