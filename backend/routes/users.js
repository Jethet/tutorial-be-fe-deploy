const express = require("express");
const router = express.Router();
let users = require("../dummyDB");

// get all users
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

// get single user: the user id (_id) is passed as the URL parameter
// the id that is passed from frontend can be accessed as req.params.id
// it needs to convert to number to compare with database _id because these are numbers

router.get("/users/:id", async (req, res) => {
  let { id } = req.params;
  id = Number(id);
  try {
    let user = users.find((user) => user._id === id);
    res.status(200).json({
      data: user
    });
  } catch (err) {
    res.status(400).json({
      message: "An error occurred.",
      err,
    });
  }
});

module.exports = router;
