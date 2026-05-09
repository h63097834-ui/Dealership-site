const mongoose = require("mongoose");

const BikeSchema = new mongoose.Schema({
  Name: String,
  Topspeed: Number,
  Price: Number,
  Company: String,
  Horsepower: Number,
  Engine: String,
  UnitsAvailable: Number,
});

module.exports = mongoose.model("Bike", BikeSchema);
