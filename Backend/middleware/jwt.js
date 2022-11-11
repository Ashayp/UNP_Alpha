const config = require("../config/settings.json");
const jwt = require("jsonwebtoken");

exports.validateUser = (req, res, next) => {
  //console.log(req.header);
  const token = req.header("Authorization");
  if (token) {
    jwt.verify(token, config.key, (err, decoded) => {
      if (err) {
        res.status(401);
        res.send("Invalid Token");
      } else {
        console.log(decoded, "at decoded");
        req.usr = decoded;
        next();
      }
    });
  } else {
    res.send("No token");
  }
};
