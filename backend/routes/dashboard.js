const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.get("/", async (req, res) => {

    try {

        const products = await Product.find().sort({ createdAt: -1 });

        const totalDescriptions = products.length;

        const productsGenerated = products.length;

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const thisMonth = products.filter(product => {

            const date = new Date(product.createdAt);

            return (
                date.getMonth() === currentMonth &&
                date.getFullYear() === currentYear
            );

        }).length;

        let wordsGenerated = 0;

        products.forEach(product => {

            wordsGenerated += product.keywords.split(" ").length;

        });

        res.status(200).json({

            stats: {

                totalDescriptions,

                productsGenerated,

                thisMonth,

                wordsGenerated

            },

            recent: products

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});

module.exports = router;