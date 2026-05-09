const express = require("express");
const SignUpRouter = express.Router();
const SignUp = require("../controller/SigninController.cjs");

SignUpRouter.post("/", SignUp);

module.exports = SignUpRouter;
