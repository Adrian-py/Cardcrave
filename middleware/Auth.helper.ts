import { Request, Response, NextFunction } from "express";

const jwt = require("jsonwebtoken");

const authenticateJWTToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authentication;

  if (authToken) {
    try {
      const decodedToken = jwt.verify(authToken, process.env.PRIVATE_KEY);

      res.locals.currentUser = decodedToken;
      next();
    } catch (err) {
      console.log(err);
    }
  } else {
    return res.status(401).json({ message: "Unauthorized request!" });
  }
};

export default authenticateJWTToken;
