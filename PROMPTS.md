# PROMPTS.md


## Project Name
AI Product Description Generator for Food Processing E-Commerce Listings

## AI Model Used
Google Gemini

---

# System Prompt / Role Used

You are an expert food processing e-commerce copywriter. Your task is to generate professional, engaging, and SEO-friendly product descriptions for food products. The descriptions should highlight product quality, ingredients, freshness, customer benefits, and match the requested tone suitable for online food marketplaces.

---

# Prompt Variation 1: Basic Product Description Prompt

## Prompt

Generate a product description for the given food product.

Product Name: {name}

Category: {category}

Keywords: {keywords}

Tone: {tone}

## Example Input

Product Name: Organic Mango Pickle  
Category: Pickles  
Keywords: Mango, Homemade, Traditional Spices  
Tone: Professional

## Example Output

Organic Mango Pickle is a delicious homemade pickle made using fresh mangoes and traditional spices. It provides a rich taste and enhances the flavor of everyday meals. This product is prepared with quality ingredients and offers an authentic homemade experience.

## Observation

This prompt generated a basic description but lacked detailed product benefits, SEO optimization, and a strong marketing approach.

---

# Prompt Variation 2: Enhanced Food Product Prompt

## Prompt

You are a food product content writer.

Generate an attractive product description for an online food store.

The description should include:
- Product quality
- Ingredients
- Taste
- Customer benefits

Product Details:

Product Name: {name}

Category: {category}

Keywords: {keywords}

Tone: {tone}

## Example Input

Product Name: Millet Cookies  
Category: Healthy Snacks  
Keywords: Millets, Fiber Rich, Natural Ingredients  
Tone: Friendly

## Example Output

Millet Cookies are a healthy and delicious snack prepared using nutritious millets and natural ingredients. They provide a perfect combination of taste and wellness while offering a fiber-rich alternative for health-conscious customers. These cookies are ideal for everyday snacking.

## Observation

This prompt produced better results with improved structure and customer-focused content. However, the output quality and SEO optimization were not consistent.

---

# Prompt Variation 3: Advanced SEO Food E-Commerce Prompt

## Prompt

You are an expert food processing e-commerce copywriter.

Generate a professional SEO-friendly product description for an online food product listing.

Requirements:
- Write a detailed description of around 120–150 words.
- Naturally include all provided keywords.
- Highlight freshness, quality, ingredients, and unique product benefits.
- Explain why customers should choose this product.
- Maintain the requested writing tone.
- End with an engaging call-to-action.

Product Details:

Product Name: {name}

Category: {category}

Keywords: {keywords}

Tone: {tone}

## Example Input

Product Name: Organic Tomato Ketchup  
Category: Sauces  
Keywords: Fresh Tomatoes, Natural Ingredients, No Artificial Colors  
Tone: Premium

## Example Output

Organic Tomato Ketchup is a premium-quality sauce prepared using carefully selected fresh tomatoes and natural ingredients to deliver an authentic taste experience. Made with high-quality ingredients and free from artificial colors, it provides a healthier choice for families. Its smooth texture and rich flavor make it a perfect companion for snacks, sandwiches, burgers, and everyday meals. This product combines freshness, quality, and great taste while following high food processing standards. Experience the natural goodness and delicious flavor of Organic Tomato Ketchup and add a premium touch to your meals.

## Observation

This prompt generated the most effective results with detailed, structured, and marketing-oriented descriptions suitable for food processing e-commerce platforms.

---

# Best Performing Prompt

Prompt Variation 3 produced the best results because it provided clear instructions about content structure, word count, SEO requirements, and customer-focused information. The generated descriptions were more detailed, professional, and suitable for online food product listings. It also ensured that keywords were naturally included while maintaining readability and a consistent tone. Therefore, Prompt Variation 3 was selected as the final prompt used in the application.

---

# Final Prompt Used in Application

The application dynamically inserts user inputs:

- Product Name
- Category
- Keywords
- Tone

into Prompt Variation 3 and sends the final prompt to the Gemini API to generate the product description.