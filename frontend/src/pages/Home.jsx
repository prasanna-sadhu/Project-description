import  Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
function Home()
{
    return(
        <div className="page-container">
            <Navbar/>
            <main className="main-content">
                <Hero/>
                <div className="cards-container">
                    <Card
                    title="Premium tone"
                    description="Generate luxury product description."/>
                    <Card 
                    title="Traditional Tone"
                    description="Highlight heritage and authenticity."/>
                    <Card 
                    title="Health -Focused Tone"
                    description="Emphasize nutritional benefits and wellness."/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
export default Home;