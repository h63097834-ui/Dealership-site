const User = require("../model/UserSchema.cjs");

async function AccountInformationController(req, res) {
  try {
    const FindUser = await User.findOne({ Name: req.user.Name });
    console.log(`FindUser.Order ${FindUser.Order}`);
    const orders = FindUser.Order;
    const name = FindUser.Name;

    return res.json({ user: { name, orders } });
  } catch (error) {
    console.error(error);
  }
}
module.exports = AccountInformationController;
