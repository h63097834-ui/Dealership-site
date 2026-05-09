const express = require("express");
const Bike = require("../model/BikeSchema.cjs");

async function FetchBikes(req, res) {
  try {
    const { Company } = req.body;
    if (!Company) {
      return res.json({ message: "Please select company first", Bikes: [] });
    }
    const Bikes = await Bike.find({ Company: Company });
    res.json({ Bikes: Bikes, message: "" });
  } catch (error) {
    console.error(error);
  }
}

async function FindBike(req, res) {
  try {
    const { companyName, bikeName } = req.body;
    if (!companyName || !bikeName)
      return res.json({
        message: "All fields are required to search for bike",
      });

    const FindBike = await Bike.findOne({
      Company: companyName,
      Name: bikeName,
    });

    if (!FindBike)
      return res.json({
        message: `No matching results for ${companyName} ${bikeName}`,
      });

    return res.json({ FindBike: FindBike });
  } catch (error) {
    console.error(error);
  }
}
module.exports = { FetchBikes, FindBike };
