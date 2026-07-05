import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      {/* Heading */}
      <h1>
        Create <span>Professional Food Product</span>
        <br />
        Descriptions with AI
      </h1>

      {/* Subtitle */}
      <p>
        Generate engaging, SEO-friendly and high-converting product
        descriptions in seconds. Perfect for food brands, restaurants,
        grocery stores and e-commerce businesses.
      </p>

      {/* Buttons */}
      <div className="hero-buttons">
        <Button onClick={() => navigate("/generator")}>
          Generate Description
        </Button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/about")}
        >
          Learn More
        </button>
      </div>

      {/* Statistics */}
      <div className="hero-stats">

        <div className="stat-card">
          <h2>15K+</h2>
          <p>Descriptions</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Businesses</p>
        </div>

        <div className="stat-card">
          <h2>99%</h2>
          <p>Accuracy</p>
        </div>

        <div className="stat-card">
          <h2>4.9★</h2>
          <p>Rating</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;