const app = require("./app");

const PORT = 8000;

function startServer() {
  app.listen(PORT, () => {
    console.log(`App listen on Port ${PORT}`);
  });
}

startServer();
