import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Input, Button } from "../components/ui";
import axios from "axios";


function About({ darkMode, setDarkMode }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data.products);
      } catch (error) {
        console.log("Unable to fetch products");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="page-container">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="main-content">

        <div className="about-section">
          <h1>About Project</h1>
          <p>
            AI Product Description Generator helps users create professional
            product descriptions for food products quickly and easily.
          </p>
        </div>

        <div className="preview-box">

          <div className="preview-header">

            <h2>Product Preview</h2>

            <div className="preview-actions">

              <Input
                type="text"
                placeholder="Search Product"
              />

              <Button>
                Add Product
              </Button>

            </div>

          </div>

          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Tone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {products.length > 0 ? (
                products
                  .slice(-3)
                  .reverse()
                  .map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.tone}</td>
                      <td>
                        <span className="edit">Edit</span>
                        {" | "}
                        <span className="delete">Delete</span>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="4">No Products Available</td>
                </tr>
              )}
            </tbody>
          </table>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default About;