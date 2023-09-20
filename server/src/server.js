const http = require("http");

const mongoose = require("mongoose");

const app = require("./app");

const { loadPlanetsData, loadPlanets } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://samoluwaseyi25:oswagz19@nasa-cluster.5do16tv.mongodb.net/nasa?retryWrites=true&w=majority&appName=AtlasApp";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

const startServer = async () => {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

startServer();
