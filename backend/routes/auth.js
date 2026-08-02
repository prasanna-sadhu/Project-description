const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("../config/passport");

const { body, validationResult } = require("express-validator");

const User = require("../models/User");
const authLimiter = require("../middleware/authLimiter");

router.post(
  "/register",
  authLimiter,
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }

      const { email, password } = req.body;

      const exists = await User.findOne({ email });

      if (exists) {
        return res.status(400).json({
          message: "Email already exists"
        });
      }

      const hash = await bcrypt.hash(password, 10);

      await User.create({
        email,
        password: hash
      });

      res.status(201).json({
        message: "Registration Successful"
      });

    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }
);

router.post(
  "/login",
  authLimiter,
  async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          message: "Invalid Credentials"
        });
      }

      const match = await bcrypt.compare(
        password,
        user.password
      );

      if (!match) {
        return res.status(400).json({
          message: "Invalid Credentials"
        });
      }

      const token = jwt.sign(
        {
          id: user._id,
          email: user.email
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d"
        }
      );

      res.json({
        message: "Login Successful",
        token
      });

    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }
);

router.get(
  "/google",
  passport.authenticate(
    "google",
    {
      scope: ["profile", "email"]
    }
  )
);

router.get(
  "/google/callback",
  passport.authenticate(
    "google",
    {
      failureRedirect: `${process.env.FRONTEND_URL}/login`
    }
  ),
  (req, res) => {

    const token = jwt.sign(
      {
        id: req.user._id,
        email: req.user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.redirect(
      `${process.env.FRONTEND_URL}/oauth-success?token=${token}`
    );
  }
);

router.get(
  "/logout",
  (req, res) => {
    req.logout(() => {
      res.json({
        message: "Logout Successful"
      });
    });
  }
);

module.exports = router;