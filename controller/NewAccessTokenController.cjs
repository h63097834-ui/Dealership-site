const jwt = require("jsonwebtoken");

async function NewAccessToken(req, res) {
  try {
    const RefreshToken = req.cookies.RefreshToken;
    if (!RefreshToken) return res.sendStatus(403);

    jwt.verify(
      RefreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error, decpoded) => {
        if (error) return res.sendStatus(403);

        const AccessToken = jwt.sign(
          { Name: decpoded.name },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "60s" },
        );
        return res.status(200).json({ AccessToken: AccessToken });
      },
    );
  } catch (error) {
    console.error(error);
  }
}
module.exports = NewAccessToken;
