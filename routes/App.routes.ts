import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  console.log("/");
  res.send("test");
});

module.exports = router;
