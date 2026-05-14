const express = require("express");
const NewAccessTokenRouter = express.Router();
const NewAccessTokenController = require("../controller/NewAccessTokenController.cjs");

NewAccessTokenRouter.post("/newaccesstoken", NewAccessTokenController);

module.exports = NewAccessTokenRouter;
