const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const productRoutes = require("./routes/products");
const dashboardRoutes = require("./routes/dashboard");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "AI Product Description Generator API"
    });
});

app.use((err, req, res, next) => {

    console.error(err.stack);

    res.status(500).json({
        message: "Server Error"
    });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});