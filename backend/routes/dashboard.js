const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    const totalDescriptions = products.length;
    const productsGenerated = products.length;

    const now = new Date();

    const thisMonth = products.filter((p) => {
      const d = new Date(p.createdAt);
      return (
        d.getMonth() === now.getMonth() &&
        d.getFullYear() === now.getFullYear()
      );
    }).length;

    let wordsGenerated = 0;

    products.forEach((p) => {
      wordsGenerated += p.keywords
        ? p.keywords.split(" ").length
        : 0;
    });

    res.json({
      stats: {
        totalDescriptions,
        productsGenerated,
        thisMonth,
        wordsGenerated
      },
      recent: products
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;