// const expressAsyncHandler = require("express-async-handler");

// const jwt = require("jsonwebtoken");
// const User = require("../../model/user/User");

// const authMiddleware = expressAsyncHandler(async (req, res, next) => {
//   let token;

//   if (req?.headers?.authorization?.startsWith("Bearer")) {
//     token = req.headers.authorization.split(" ")[1];

//     try {
//       if (token) {
//         const decoded = jwt.verify(token, process.env.JWT_KEY);
//         //find the user by id
//         const user = await User.findById(decoded?.id).select("-password");
//         //attach the user to the request object
//         req.user = user;
//         next();
//       }
//     } catch (error) {
//       throw new Error("Not authorized token expired, login again");
//     }
//   } else {
//     throw new Error("There is no token attached to the header");
//   }
// });

// module.exports = authMiddleware;


const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../../model/user/User");

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  let token;

  // Check for Authorization header and extract token
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];

    try {
      if (token) {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_KEY || 'qwertyuiop');

        // Find user by decoded ID and exclude password
        const user = await User.findById(decoded?.id).select("-password");

        if (!user) {
          res.status(401);
          throw new Error("User not found. Please log in again.");
        }

        // Attach user to request object
        req.user = user;
        next();
      } else {
        res.status(401);
        throw new Error("Token not found. Please log in again.");
      }
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        res.status(401);
        throw new Error("Token expired. Please log in again.");
      } else {
        res.status(401);
        throw new Error("Not authorized, invalid token.");
      }
    }
  } else {
    res.status(401);
    throw new Error("Authorization header missing or improperly formatted.");
  }
});

module.exports = authMiddleware;