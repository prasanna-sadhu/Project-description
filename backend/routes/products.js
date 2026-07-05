const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.get("/", async (req, res) => {

    try {

        const products = await Product.find();

        res.status(200).json({
            message: "All products fetched successfully",
            products
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.post("/generate", async (req, res) => {

    const { name, category, keywords, tone } = req.body;

    if (!name || !category || !keywords || !tone) {

        return res.status(400).json({
            message: "All fields are required"
        });

    }

    const description = `${name} is a ${tone.toLowerCase()} ${category.toLowerCase()} product prepared using ${keywords}.`;

    res.status(200).json({
        message: "Product Description Generated Successfully",
        description
    });

});

router.get("/:id", async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        if (!product) {

            return res.status(404).json({
                message: "Product Not Found"
            });

        }

        res.status(200).json({
            message: "Product fetched successfully",
            product
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.post("/", async (req, res) => {

    const { name, category, keywords, tone } = req.body;

    if (!name || !category || !keywords || !tone) {

        return res.status(400).json({
            message: "All fields are required"
        });

    }

    try {

        const product = await Product.create({

            name,
            category,
            keywords,
            tone

        });

        res.status(201).json({

            message: "Product Added Successfully",
            product

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.get("/search/query", async (req, res) => {

    const q = req.query.q;

    try {

        const products = await Product.find({

            $or: [

                { name: { $regex: q, $options: "i" } },

                { category: { $regex: q, $options: "i" } },

                { keywords: { $regex: q, $options: "i" } },

                { tone: { $regex: q, $options: "i" } }

            ]

        });

        res.status(200).json({

            message: "Search Completed Successfully",
            count: products.length,
            products

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.put("/:id", async (req, res) => {

    try {

        const product = await Product.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        if (!product) {

            return res.status(404).json({

                message: "Product Not Found"

            });

        }

        res.status(200).json({

            message: "Product Updated Successfully",

            product

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.delete("/:id", async (req, res) => {

    try {

        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {

            return res.status(404).json({

                message: "Product Not Found"

            });

        }

        res.status(200).json({

            message: "Product Deleted Successfully",

            product

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;