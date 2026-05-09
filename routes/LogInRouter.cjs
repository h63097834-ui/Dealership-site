const express = require("express");
const LogInRouter = express.Router();
const LogInController = require("../controller/LogInController.cjs");

LogInRouter.post("/", LogInController);

module.exports = LogInRouter;
