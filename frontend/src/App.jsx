import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import './App.css';
function App()
{
  return(
    <BrowserRouter>
       <div className="page-container">

    <Navbar />
    <main className="main-content">
    <Hero/>
    <div className="cards-container">
      <Card 
      title="Premium Tone"
      description="Generate luxury product descriptions ."
      />  
    <Card 
      title="Traditional Tone"
      description="Highlight heritage and authenticity."
      />
    <Card 
      title="Health-Focused Tone"
      description="Emphasize nutritional benefits and wellness."
      />
    </div>
    </main>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}
export default App;