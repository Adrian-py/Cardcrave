// Types
import { Request, Response } from "express";

// Email Validator
import * as EmailValidator from "email-validator";

// Models
const UserModel = require("../models/User.model");

const createUser = async (req: Request, res: Response) => {
  console.log(req.body);

  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  // Validate data
  // Check username length
  if (userData.username.length > 10 || userData.username.length < 5)
    return res
      .status(400)
      .json({ message: "Username length must be between 5 to 10 letters." });

  // Check if email validity
  if (!EmailValidator.validate(userData.email))
    return res.status(400).json({ message: "Email invalid!" });

  // Check password length
  if (userData.password.length > 16 || userData.password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password length must be between 8 to 16 letters." });
  }
  //Check password characters
  if (!/[A-Za-z]+/.test(userData.password) || !/[0-9]+/.test(userData.password))
    return res.status(400).json({
      message: "Password must contain atleast one character and digit",
    });

  // Save to mongodb database
  const newUser = new UserModel(userData);
  newUser.save();

  return res.status(200).json({ message: "success" });
};

export { createUser };
