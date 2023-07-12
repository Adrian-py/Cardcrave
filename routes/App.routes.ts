import express from "express";
const router = express.Router();

// Controllers
import { createUser } from "../controller/UserController";

// Helpers
import authenticateJWTToken from "../middleware/Auth.helper";

router.get("/", (req, res) => {
  res.send("test");
});

module.exports = router;
