const express = require("express");
const FindBikeRouter = express.Router();
const { FindBike } = require("../controller/BikeController.cjs");

FindBikeRouter.post("/findbike", FindBike);

module.exports = FindBikeRouter;
