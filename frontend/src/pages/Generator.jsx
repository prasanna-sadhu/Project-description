import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Input, Button, Loader, Toast } from "../components/ui";

function Generator({ darkMode, setDarkMode }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("");

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );

      const product = res.data.product || res.data;

      setProductName(product.name);
      setCategory(product.category);
      setKeywords(product.keywords);
      setTone(product.tone);
      setDescription(product.description);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (id) {
        await axios.put(
          `http://localhost:5000/api/products/${id}`,
          {
            name: productName,
            category,
            keywords,
            tone,
            description,
          }
        );

        setToastMessage("Product Updated Successfully!");

        setShowToast(true);

        window.dispatchEvent(
          new Event("dashboardUpdate")
        );

        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/products/generate",
          {
            name: productName,
            category,
            keywords,
            tone,
          }
        );

        setDescription(res.data.description);

        setToastMessage("Generated Successfully!");

        setShowToast(true);

        window.dispatchEvent(
          new Event("dashboardUpdate")
        );
      }

      setLoading(false);

      setTimeout(() => {
        setShowToast(false);
      }, 2000);

    } catch (error) {
      console.log(error);

      setLoading(false);

      setToastMessage("Something went wrong");

      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  };
    return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="main-content">
        <div className="generator-container">

          <div className="generator-form">

            <h1>
              {id
                ? "Update Product"
                : "AI Product Description Generator"}
            </h1>

            <p>
              {id
                ? "Modify the product details and click Update."
                : "Enter product details to generate description."}
            </p>

            <form
              className="gen-form"
              onSubmit={handleSubmit}
            >

              <Input
                label="Product Name"
                value={productName}
                onChange={(e) =>
                  setProductName(e.target.value)
                }
                placeholder="Organic Mango Pickle"
              />

              <Input
                label="Category"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                placeholder="Pickles"
              />

              <Input
                label="Keywords"
                value={keywords}
                onChange={(e) =>
                  setKeywords(e.target.value)
                }
                placeholder="Fresh Mango, Homemade Spices"
              />

              <Input
                label="Tone"
                value={tone}
                onChange={(e) =>
                  setTone(e.target.value)
                }
                placeholder="Premium / Traditional / Healthy"
              />

              <Button type="submit">
                {id
                  ? "Update Product"
                  : "Generate Description"}
              </Button>

            </form>

          </div>

          <div className="generator-output">

            <h2>Generated Description</h2>

            {loading && <Loader />}

            {!loading && !description && (
              <p className="placeholder-text">
                Your AI-generated description will appear here...
              </p>
            )}

            {!loading && description && (
              <div className="output-box">
                <p>{description}</p>
              </div>
            )}

            {showToast && (
              <Toast message={toastMessage} />
            )}

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Generator;