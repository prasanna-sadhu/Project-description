import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function About()
{
    return(
        <div className="page-container">
            <Navbar/>
            <main className="main-content">
                <div className="about-section">
               <h1>About the project</h1> 
               <p>
               AI Product Description Generator is a web application designed to help food processing businesses create professional product descriptions for e-commerce platform.
               </p>
               </div>
            </main>
          <Footer/>
        </div>
    );
}
export default About;