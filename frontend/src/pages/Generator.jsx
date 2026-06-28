import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Input,
  Button,
  Loader,
  Toast,
} from "../components/ui";

function Generator({ darkMode, setDarkMode }) {
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
    setShowToast(false);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/products/generate",
        {
          name: productName,
          category,
          keywords,
          tone,
        }
      );

      setDescription(response.data.description);

      setToastMessage("Description Generated Successfully");
      setShowToast(true);
    } catch (error) {
      setToastMessage("Failed to connect to backend");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="main-content">
        <div className="login-container">
          <div className="login-box">
            <h1>AI Product Description Generator</h1>

            <p>
              Enter product details to generate a description.
            </p>

            <form onSubmit={generateDescription}>
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
                placeholder="Healthy"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
              />

              <Button type="submit">
                Generate Description
              </Button>
            </form>

            {loading && <Loader />}

            {showToast && (
              <Toast
                message={toastMessage}
              />
            )}

            {description && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <h3>Generated Description</h3>

                <p>{description}</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Generator;