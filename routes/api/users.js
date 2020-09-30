const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
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
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }

      // Get users gravatar

      // Encrypt password

      // Return jsonwebtoken
      res.send("User route");
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
