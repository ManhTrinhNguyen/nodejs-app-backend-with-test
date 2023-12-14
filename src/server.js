const express = require("express");

const app = express();

const PORT = 8000;

app.get("/ynap", (req, res) => {
  res.send("Hello 'You Need A Project' Community!");
});

function startServer() {
  app.listen(PORT, () => {
    console.log(`App listen on Port ${PORT}`);
  });
}

startServer();
