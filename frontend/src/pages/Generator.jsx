import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Input,
  Button,
  Loader,
  Toast
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

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.post(

        "http://localhost:5000/api/ai/generate-description",

        {

          name: productName,
          category,
          keywords,
          tone

        },

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );

      setDescription(res.data.description);

      setToastMessage("AI Description Generated Successfully");

      setShowToast(true);

      // Notify dashboard to refresh
      window.dispatchEvent(
        new Event("dashboardUpdate")
      );

    }

    catch (error) {

      console.log(error.response?.data);

      setToastMessage(

        error.response?.data?.message ||

        "AI Generation Failed"

      );

      setShowToast(true);

    }

    finally {

      setLoading(false);

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

              AI Product Description Generator

            </h1>

            <form onSubmit={generateDescription}>

              <Input
                label="Product Name"
                value={productName}
                onChange={(e) =>
                  setProductName(e.target.value)
                }
              />

              <Input
                label="Category"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              />

              <Input
                label="Keywords"
                value={keywords}
                onChange={(e) =>
                  setKeywords(e.target.value)
                }
              />

              <Input
                label="Tone"
                value={tone}
                onChange={(e) =>
                  setTone(e.target.value)
                }
              />

              <Button type="submit">

                Generate Description

              </Button>

            </form>

          </div>

          <div className="generator-output">

            <h2>

              Generated Description

            </h2>

            {loading && <Loader />}

            {!loading && description && (

              <div className="output-box">

                <p>{description}</p>

              </div>

            )}

            {!loading && !description && (

              <p>

                Your AI-generated description will appear here...

              </p>

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