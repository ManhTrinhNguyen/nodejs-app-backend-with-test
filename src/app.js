const express = require("express");

const app = express();

app.get("/ynap", (req, res) => {
  res.status(200).json({ greeting: "Hello YNAP" });
});

module.exports = app;
