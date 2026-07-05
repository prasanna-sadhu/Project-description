import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About({ darkMode, setDarkMode }) {
  return (
    <div className="page-container">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="main-content">
        <div className="about-section">

          <h1>About Project</h1>

          <p className="about-intro">
            AI Product Description Generator is a smart web application that
            creates professional and engaging product descriptions within
            seconds. It helps businesses and online sellers save time while
            producing high-quality content.
          </p>

          <div className="about-cards">

            <div className="about-card">
              <h2>Our Mission</h2>
              <p>
                To simplify product description writing using Artificial
                Intelligence and help users create attractive content quickly.
              </p>
            </div>

            <div className="about-card">
              <h2>What It Does</h2>
              <p>
                Enter product details such as name, category, keywords and
                preferred tone, then generate a unique and professional
                description instantly.
              </p>
            </div>

            <div className="about-card">
              <h2>Key Features</h2>
              <ul>
                <li>AI-generated descriptions</li>
                <li>Multiple writing tones</li>
                <li>Dashboard management</li>
                <li>Edit and Delete products</li>
                <li>Search functionality</li>
                <li>Light & Dark Mode</li>
              </ul>
            </div>

            <div className="about-card">
              <h2>Benefits</h2>
              <p>
                Saves time, improves productivity, creates engaging product
                content and reduces manual writing effort.
              </p>
            </div>

            <div className="about-card">
              <h2>Why Choose This Project?</h2>
              <p>
                The application generates consistent, professional and
                customer-friendly descriptions that help improve product
                presentation and online sales.
              </p>
            </div>

            <div className="about-card">
              <h2>Target Users</h2>
              <p>
                Designed for online sellers, food businesses, startups,
                digital marketers and anyone looking to generate product
                descriptions quickly and efficiently.
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;