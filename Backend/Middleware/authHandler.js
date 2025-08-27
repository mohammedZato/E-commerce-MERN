const jwt = require("jsonwebtoken");

const authHandler = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.replace("Bearer ", "");

    const jwt_payload = jwt.verify(accessToken, process.env.secret_key);

    req.user = jwt_payload;
  } catch (error) {
    res.status(401).json({
      status: "Unauthorised",
    });
    return;
  }

  next();
};

module.exports = authHandler;
