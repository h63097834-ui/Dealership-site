const express = require("express");
const SignUpRouter = express.Router();
const SignUp = require("../controller/SigninController.cjs");

SignUpRouter.post("/signup", SignUp);

module.exports = SignUpRouter;
