const jwt = require("jsonwebtoken");

const jwtManager = (user) => {
  const accessToken = jwt.sign(
    {
      _id: user._id,
      username: user.username,
      role: user.role,
    },
    process.env.secret_key
  );

  return accessToken;
};

module.exports = jwtManager;
