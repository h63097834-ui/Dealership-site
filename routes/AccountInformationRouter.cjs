const express = require("express");
const AccountInformationRouter = express.Router();
const AccountInformationController = require("../controller/AccountInformationController.cjs");
const ServerSideSecurity = require("../middleware/ServerSideSecurity.cjs");

AccountInformationRouter.post(
  "/",
  ServerSideSecurity,
  AccountInformationController,
);

module.exports = AccountInformationRouter;
