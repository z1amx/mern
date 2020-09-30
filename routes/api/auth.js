const express = require("express");
const router = express.Router();

// @ Route GET api/auth

router.post("/", (req, res) => res.send("Auth route"));

module.exports = router;
