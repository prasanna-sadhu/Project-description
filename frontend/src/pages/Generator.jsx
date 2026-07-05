import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Input, Button, Loader, Toast } from "../components/ui";

function Generator() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("");

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const generateDescription = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDescription("");

    setTimeout(() => {
      setDescription(
  ` ${productName} - Premium Quality Product

Experience the authentic taste and exceptional quality of ${productName}, carefully crafted to deliver the perfect balance of flavor, freshness, and tradition. This product belongs to the ${category} category and is designed for customers who value purity, taste, and premium standards.

Made using handpicked ingredients, ${productName} ensures a rich and natural experience in every use. Enhanced with ${keywords}, it brings together traditional methods and modern quality control to guarantee consistency and satisfaction.

Ideal for daily use, gifting, or special occasions, this product is known for its superior aroma, taste, and long-lasting freshness. The carefully selected ingredients ensure that every bite or use delivers a memorable experience.

With a perfectly balanced ${tone} tone, this product stands out in its category for its authenticity and premium feel. Whether you are a home user or a professional, ${productName} is designed to meet high expectations with ease.

Order today and experience why ${productName} is trusted by thousands of customers for its quality, consistency, and excellence.`
);
      setLoading(false);
      setToastMessage("Description Generated!");
      setShowToast(true);

      setTimeout(() => setShowToast(false), 2000);
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <main className="main-content">
        <div className="generator-container">

          <div className="generator-form">
            <h1>AI Product Description Generator</h1>
            <p>Enter product details to generate a description.</p>

            <form onSubmit={generateDescription} className="gen-form">

              <Input
                label="Product Name"
                placeholder="Organic Mango Pickle"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />

              <Input
                label="Category"
                placeholder="Pickles"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />

              <Input
                label="Keywords"
                placeholder="Fresh Mangoes, Homemade Spices"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />

              <Input
                label="Tone"
                placeholder="Healthy / Premium / Traditional"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
              />

              <Button type="submit">Generate Description</Button>

            </form>
          </div>

          <div className="generator-output">

            <div className="output-header">
              <h2>Generated Description</h2>
            </div>

            {loading && <Loader />}

            {showToast && <Toast message={toastMessage} />}

            {!description && !loading && (
              <div className="placeholder">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            )}

            {description && (
              <div className="output-box">
                <p>{description}</p>
              </div>
            )}

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Generator;