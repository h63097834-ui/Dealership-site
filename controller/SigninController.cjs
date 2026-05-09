const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/UserSchema.cjs");

async function SingUp(req, res) {
  try {
    const { name, age, password } = req.body;
    if (!name || !age || !password)
      return res.json({
        message: "All fields are required for Creating Account",
      });
    else if (age < 18)
      return res.json({
        message: `You must be atleast 18 to Create an Account`,
      });
    else if (password.length < 6)
      return res.json({
        message: "Password must be atleast 6 Characters Long",
      });

    const checkDuplicate = await User.findOne({ Name: name });
    if (checkDuplicate)
      return res.json({ message: `Username ${name} already exists` });

    const HashedPassword = await bcrypt.hash(password, 10);
    const NewUser = new User({
      Name: name,
      Age: age,
      Password: HashedPassword,
    });
    await NewUser.save();

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
    return res.json({
      message: `Account for ${name} created successfully`,
      AccessToken,
    });
  } catch (error) {
    console.error(error);
  }
}
module.exports = SingUp;
