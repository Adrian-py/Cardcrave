// Libraries
const jwt = require("jsonwebtoken");
import bcrypt from "bcrypt";

// Types
import { Request, Response } from "express";

// Email Validator
import * as EmailValidator from "email-validator";

// Models
const UserModel = require("../models/User.model");

const createUser = async (req: Request, res: Response) => {
  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  /*
    Validate Data
  */
  // Check username length
  if (userData.username.length > 10 || userData.username.length < 5)
    return res
      .status(400)
      .json({ message: "Username length must be between 5 to 10 letters." });

  // Check if email validity
  if (!EmailValidator.validate(userData.email))
    return res.status(400).json({ message: "Email invalid!" });

  // Check password length
  if (userData.password.length > 16 || userData.password.length < 8)
    return res
      .status(400)
      .json({ message: "Password length must be between 8 to 16 letters." });

  //Check password characters
  if (!/[A-Za-z]+/.test(userData.password) || !/[0-9]+/.test(userData.password))
    return res.status(400).json({
      message: "Password must contain atleast one character and digit",
    });

  /*
    Save to mongodb database
  */
  const newUser = new UserModel(userData);
  await newUser
    .save()
    .then(() => {
      return res.status(200).json({ message: "success" }).redirect("/login");
    })
    .catch((err: any) => {
      if (err.code === 11000) {
        return res.status(400).json({
          message: "Duplicate Key Error",
        });
      }
    });
};

const loginUser = async (req: Request, res: Response) => {
  const userData = {
    username: req.body.username,
    email: req.body.email,
  };
  const existingUser = await UserModel.findOne({
    username: userData.username,
    email: userData.email,
  }).exec();

  /*
    Check if user is found
  */
  if (!existingUser)
    return res.status(400).json({ message: "User not found!" });

  /*
    Check if password is valid
  */
  bcrypt.compare(req.body.password, existingUser.password, (err, result) => {
    if (err) throw err;

    if (result) {
      const token = jwt.sign(
        { username: existingUser.username },
        process.env.PRIVATE_KEY
      );

      return res.status(200).json({ message: "Login Success", token: token });
    }
    return res.status(400).json({ message: "Wrong credentials!" });
  });
};

export { createUser, loginUser };
