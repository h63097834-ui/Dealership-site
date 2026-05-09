const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  BikeName: { type: String, default: "" },
  CompanyName: { type: String, default: "" },
  OrederPlacedOnDate: { type: String, default: "" },
});

module.exports = mongoose.model("Order", OrderSchema);
