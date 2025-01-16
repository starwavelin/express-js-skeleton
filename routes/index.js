const express = require("express");
const router = express.Router();

// Define a simple Hello route
router.get("/", (req, res) => {
  res.send("Hello, Express.js!");
});

module.exports = router;