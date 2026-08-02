const express = require("express");
const cors = require("cors");
require("dotenv").config();

const session = require("express-session");

const connectDB = require("./config/db");
const passport = require("./config/passport");

const app = express();

connectDB();

app.use(
  cors({
    origin: ["http://localhost:5173",
    "project-description-ten.vercel.app"],
    credentials: true
  })
);

app.use(express.json());

app.use(
  session({
    secret: "oauthsecret",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
const dashboardRoutes = require("./routes/dashboard");
const aiRoutes = require("./routes/ai"); // NEW

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/ai", aiRoutes); // NEW

app.get("/", (req, res) => {
  res.json({
    message: "API Running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});