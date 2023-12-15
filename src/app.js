const express = require("express");

const app = express();

app.use(express.json());

app.get("/ynap", (req, res) => {
  res.status(200).json({ greeting: "Hello YNAP" });
});

app.post("/ynap", (req, res) => {
  const { student, teacher, project } = req.body;
  if (!student || !teacher || !project) {
    return res.status(400).json({
      error: 'Missing required property'
    })
  };
  
  return res.status(201).json({ student, teacher, project });
});
module.exports = app;
