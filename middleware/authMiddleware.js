const { verifyTokenFunction } = require("../utils/tokenUtils"); 

module.exports = function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"] || req.body.token;
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const user = verifyTokenFunction(token); 
    req.user = user; 
    next();
  } catch (err) {
    res.status(401).json({ message: "Token inválido" });
  }
};
