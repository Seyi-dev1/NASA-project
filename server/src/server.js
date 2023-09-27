const http = require("http");

const app = require("./app");

const { mongoConnect } = require("./services/mongo");

const { loadPlanetsData, loadPlanets } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async () => {
  await mongoConnect();
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

startServer();
