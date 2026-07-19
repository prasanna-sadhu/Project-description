const express = require("express");

const router = express.Router();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const verifyToken = require("../middleware/authMiddleware");

const Product = require("../models/Product");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

router.post(
  "/generate-description",
  verifyToken,
  async (req, res) => {

    try {

      const {
        name,
        category,
        keywords,
        tone
      } = req.body;

      if (
        !name ||
        !category ||
        !keywords ||
        !tone
      ) {

        return res.status(400).json({

          message: "All fields are required"

        });

      }

      const model = genAI.getGenerativeModel({

        model: "gemini-2.5-flash"

      });

      const prompt = `
You are an expert e-commerce copywriter.

Generate a professional SEO-friendly product description.

Product Name: ${name}

Category: ${category}

Keywords: ${keywords}

Tone: ${tone}

Requirements:

- 120 to 150 words.
- Professional and engaging.
- Mention freshness and quality.
- Highlight customer benefits.
- Naturally include the keywords.
- End with a persuasive closing sentence.
`;

      const result = await model.generateContent(prompt);

      const response = await result.response;

      const description = response.text();

      const product = await Product.create({

        userId: req.user.id,

        name,

        category,

        keywords,

        tone,

        description

      });

      res.status(200).json({

        message: "AI Description Generated Successfully",

        description,

        product

      });

    }

    catch (error) {

      console.error(error);

      res.status(500).json({

        message: "Failed to generate AI description",

        error: error.message

      });

    }

  }

);

module.exports = router;