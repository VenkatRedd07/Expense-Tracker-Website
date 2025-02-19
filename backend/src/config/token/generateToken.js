// const jwt = require("jsonwebtoken");

// const generateToken = id => {
//   return jwt.sign({ id }, process.env.JWT_KEY || secret-123, { expiresIn: "20000d" });
// };

// module.exports = generateToken;

const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_KEY || 'qwertyuiop', // Corrected fallback
    { expiresIn: "1d" } 
  );
};

module.exports = generateToken;
