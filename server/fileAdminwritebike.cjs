const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, ".env"),
});
const ConnectToUserDB = require("../model/ConnectToUserDB.cjs");
const BikeSchema = require("../model/BikeSchema.cjs");

ConnectToUserDB();
async function WriteBike(
  name,
  Topspeed,
  Price,
  Company,
  Horsepower,
  Engine,
  UnitsAvailable,
) {
  try {
    const duplicate = await BikeSchema.findOne({ Name: name });
    if (duplicate) {
      console.log("bike already exits cout not add");
      return;
    }
    const Bike = new BikeSchema({
      Name: name,
      Topspeed: Topspeed,
      Price: Price,
      Company: Company,
      Horsepower: Horsepower,
      Engine: Engine,
      UnitsAvailable: UnitsAvailable,
    });
    await Bike.save();
    console.log("New Bike added");
  } catch (error) {
    console.error(error);
  }
}

async function Update(name, company) {
  try {
    const update = await BikeSchema.findOne({ Name: name });
    update.Company = company;
    console.log("done");
    await update.save();
  } catch (error) {
    console.error(error);
  }
}
WriteBike(
  "Aprilia RS 457",
  190,
  7000,
  "Aprilia",
  47,
  " 457cc, 2-cylinder, 4-stroke, liquid-cooled, DOHC, parallel-twin",
  10,
);
