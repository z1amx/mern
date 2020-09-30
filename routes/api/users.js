const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @ Route GET api/users

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please  include a valid email").isEmail(),
    check("password", "Password must be more then 4 characters").isLength({
      min: 4,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send("User route");
  }
);

module.exports = router;
