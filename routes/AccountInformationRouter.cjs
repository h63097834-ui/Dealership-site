const express = require("express");
const AccountInformationRouter = express.Router();
const { AccountInformationController, SeeMyOrders, Logout, DeleteAccount } = require("../controller/AccountInformationController.cjs");
const ServerSideSecurity = require("../middleware/ServerSideSecurity.cjs");

AccountInformationRouter.post(
  "/myaccount",
  ServerSideSecurity,
  AccountInformationController,
);

AccountInformationRouter.post('/myaccount/myorders', ServerSideSecurity, SeeMyOrders);

AccountInformationRouter.post('/myaccount/logout', ServerSideSecurity, Logout);

AccountInformationRouter.delete('/myaccount/deleteaccount', ServerSideSecurity, DeleteAccount);

module.exports = AccountInformationRouter;
