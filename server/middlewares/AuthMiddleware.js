import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = JSON.parse(req.cookies.jwt);
  if (!token) return res.status(401).send("No estas autenticado!");
  jwt.verify(token.jwt, process.env.JWT_KEY, async (err, payload) => {
    if (err) return res.status(403).send("Token no valido!");
    req.userId = payload?.userId;
    next();
  });
};