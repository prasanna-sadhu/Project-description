import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home({ darkMode, setDarkMode }) {
  const tones = [
    {
      title: "Premium Tone",
      description: "Generate luxury product descriptions for premium food brands."
    },
    {
      title: "Traditional Tone",
      description: "Highlight heritage, authenticity and homemade quality."
    },
    {
      title: "Health Focused",
      description: "Emphasize nutrition, wellness and healthy ingredients."
    },
    {
      title: "Luxury Gourmet",
      description: "Elegant descriptions for gourmet and imported foods."
    }
  ];

  return (
    <div className={`page-container ${darkMode ? "dark-mode" : ""}`}>
     
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="main-content">

        <Hero />

        <section className="features-section">
          <h2>Choose Your Description Style</h2>

          <div className="cards-container">
            {tones.map((tone, index) => (
              <Card
                key={index}
                title={tone.title}
                description={tone.description}
              />
            ))}
          </div>
        </section>

        <section className="work-section">
          <h2>How It Works</h2>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Enter Product</h3>
              <p>Add product name and details.</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Select Tone</h3>
              <p>Choose Premium, Traditional or SEO.</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Generate</h3>
              <p>AI creates an engaging description.</p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3>Copy & Use</h3>
              <p>Copy instantly and use anywhere.</p>
            </div>
          </div>
        </section>

        <section className="feedback-section">

          <h2>We Value Your Feedback</h2>
          <p>Tell us how we can improve your experience</p>

          <div className="feedback-box">

            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label>Feedback</label>
              <textarea rows="4" placeholder="Write your feedback..." />
            </div>

            <button className="btn">Submit Feedback</button>

          </div>
        </section>

      </main>


      <Footer />
    </div>
  );
}

export default Home;