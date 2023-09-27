const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://samoluwaseyi25:hv3iW4liULY1DdoG@nasa-cluster.5do16tv.mongodb.net/nasa?retryWrites=true&w=majority&appName=AtlasApp";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};