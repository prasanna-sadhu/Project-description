const express = require("express");
const router = express.Router();

const { products } = require("./productsData");

router.get("/", (req, res) => {

    const totalDescriptions = products.length;

    const productsGenerated = products.length;

    const thisMonth = products.length;

    let wordsGenerated = 0;

    products.forEach(product => {
        wordsGenerated += product.keywords.split(" ").length;
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

});

module.exports = router;