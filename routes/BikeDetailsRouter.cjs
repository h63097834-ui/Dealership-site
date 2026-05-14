const express = require('express');
const BikeDetailsRouter = express.Router();
const { BikeDetails } = require('../controller/BikeController.cjs');

BikeDetailsRouter.post('/bikedetails', BikeDetails);

module.exports = BikeDetailsRouter