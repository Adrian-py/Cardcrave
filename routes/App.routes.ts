import express from "express";
const router = express.Router();

// Controllers
import { createUser } from "../controller/UserController";

router.get("/", (req, res) => {
  res.send("test");
});

router.post("/register", createUser);

module.exports = router;
