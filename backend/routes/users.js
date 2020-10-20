const express = require("express");
const router = express.Router();
let users = require("../dummyDB");

router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      message: "An error occurred.",
      err,
    });
  }
});

module.exports = router