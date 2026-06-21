import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

function About({

darkMode,

setDarkMode

})

{

return(

<div className="page-container">
<Navbar

darkMode={darkMode}

setDarkMode={setDarkMode}

/>

<main className="main-content">

<div className="about-section">

<h1>About the project</h1>

<p>

AI Product Description Generator is a web application designed to help food processing businesses create professional product descriptions for e-commerce platforms.

</p>

</div>

</main>

<Footer/>

</div>

);

}

export default About;