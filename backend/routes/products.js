const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Product created successfully",
      product
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/search/query", async (req, res) => {
  try {
    const q = req.query.q || "";

    const products = await Product.find({
      $or: [
        { name: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
        { keywords: { $regex: q, $options: "i" } },
        { tone: { $regex: q, $options: "i" } }
      ]
    });

    res.status(200).json({
      count: products.length,
      products
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/generate", async (req, res) => {
  try {
    const { name, category, keywords, tone } = req.body;

    if (!name || !category || !keywords || !tone) {
      return res.status(400).json({ message: "All fields required" });
    }

     const description = `
${name} is a premium-quality ${category.toLowerCase()} product designed for users who prefer a ${tone.toLowerCase()} experience.

It is carefully prepared using high-quality ingredients such as ${keywords}, ensuring consistency, freshness, and reliability in every use.

This product is crafted with attention to detail to maintain a balance of taste, quality, and long-lasting performance. It is suitable for daily use and also ideal for special occasions.

The ${name} stands out in its category because of its commitment to purity, customer satisfaction, and trusted quality standards.

Whether you are using it personally or sharing it with family and friends, it delivers a smooth and satisfying experience every time.

Its ${tone.toLowerCase()} nature makes it perfect for customers who value both tradition and modern quality standards.
    `;

    const product = await Product.create({
      name,
      category,
      keywords,
      tone,
      description
    });

    res.status(200).json({
      message: "Generated & Saved",
      description,
      product
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;