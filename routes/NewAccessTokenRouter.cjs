const express = require("express");
const NewAccessTokenRouter = express.Router();
const NewAccessTokenController = require("../controller/NewAccessTokenController.cjs");

NewAccessTokenRouter.post("/", NewAccessTokenController);

module.exports = NewAccessTokenRouter;
