const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../api/../../middleware/auth");

// User Model
const User = require("../../models/User");

// @route POST api/auth/
// @desc Auth user
// @access Public
router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "Porfavor, rellene todos los espacios" });
  }

  // Check for existing user
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "Usuario no existe" });

    // Validate password

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res.status(400).json({ msg: "Credenciales no validas" });

      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 6600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
            },
          });
        }
      );
    });
  });
});

// @route GET api/auth/user
// @desc GET user data
// @access Private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
