const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, ".env"),
});
const express = require("express");
const BikeRouter = require("../routes/BikeRouter.cjs");
const SignUpRouter = require("../routes/SignUpRouter.cjs");
const LogInRouter = require("../routes/LogInRouter.cjs");
const NewAccessTokenRouter = require("../routes/NewAccessTokenRouter.cjs");
const AccountInformationRouter = require("../routes/AccountInformationRouter.cjs");
const FindBikeRouter = require("../routes/FindBikeRouter.cjs");
const cors = require("cors");
const CookieParser = require("cookie-parser");
const ConnectToUserDB = require("../model/ConnectToUserDB.cjs");

ConnectToUserDB();

const App = express();
App.use(express.json());
App.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
App.use(CookieParser());

App.use("/bikes", BikeRouter);
App.use("/findbike", FindBikeRouter);
App.use("/signup", SignUpRouter);
App.use("/login", LogInRouter);
App.use("/myaccount", AccountInformationRouter);
App.use("/newaccesstoken", NewAccessTokenRouter);

App.listen(process.env.PORT, () => {
  console.log("Server is running");
});
