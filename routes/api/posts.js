const express = require("express");
const router = express.Router();

// @ Route GET api/posts

router.post("/", (req, res) => res.send("Posts route"));

module.exports = router;
