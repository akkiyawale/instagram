const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign(
    { username: user.username, role: user.role, _id: user._id },
    "VwmriqhfNqWUUiimocOcTkkjVUtAgOLWerksxoCVyioMeDbuJfDLrDHeybHTAsBH",
    { expiresIn: "200000s" }
  );
};
const generateRefreshToken = (user) => {
  return jwt.sign(
    { username: user.username, role: user.role, _id: user._id },
    "ApmXyjSRIHblmeLzgVVxKqOMcFzhAOxtFRFQVowmrGFKCULHHmBoEXyQYYaPyYaQ"
  );
};

module.exports = { generateAccessToken, generateRefreshToken };
