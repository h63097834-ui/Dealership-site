const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserSchema = require("../model/UserSchema.cjs");

async function LogInController(req, res) {
  try {
    const { name, password } = req.body;
    if (!name || !password)
      return res
        .status(400)
        .json({ message: "All fields are required for Logging In" });

    const FindUser = await UserSchema.findOne({ Name: name });
    if (!FindUser) return res.json({ message: `Username ${name} not found` });

    const CheckPassword = await bcrypt.compare(password, FindUser.Password);
    if (!CheckPassword) return res.json({ message: "Invalid Password" });

    const AccessToken = jwt.sign(
      { Name: name },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" },
    );
    const RefreshToken = jwt.sign(
      { Name: name },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "5m" },
    );

    res.cookie("RefreshToken", RefreshToken, {
      httpOnly: true,
      maxAge: 5 * 60 * 1000,
    });
    return res.status(200).json({
      message: `Logged In successfully`,
      AccessToken,
    });
  } catch (error) {
    console.error(error);
  }
}
module.exports = LogInController;
