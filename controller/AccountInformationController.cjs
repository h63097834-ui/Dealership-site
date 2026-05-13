const User = require("../model/UserSchema.cjs");
const jwt = require('jsonwebtoken');

async function AccountInformationController(req, res) {
  try {
    const FindUser = await User.findOne({ Name: req.user.Name });

    const name = FindUser.Name;
    const orders = FindUser.Orders;
    const date = FindUser.AccountCreatedAt;

    return res.json({ name, orders, date });
  } catch (error) {
    console.error(error);
  }
}

async function Logout(req, res) {
  try {
    res.status(200).clearCookie('RefreshToken', { httpOnly: true });
  }
  catch (error) {
    console.error(error);
  }
}

async function SeeMyOrders(req, res) {
  try {
    const FindUser = await User.findOne({ Name: req.user.Name });

    if (!FindUser)
      return res.sendStatus(400);

    const orders = FindUser.Order;
    console.log(`length of orders ${FindUser.Order.length}`);
    return res.status(200).json({ orders: orders })
  }
  catch (error) {
    console.error(error);
  }
}
module.exports = { AccountInformationController, SeeMyOrders, Logout };
