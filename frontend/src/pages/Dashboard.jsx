import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

function Dashboard({

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

<div className="dashboard-section">

<h1>Dashboard</h1>

<p>

Welcome to your dashboard.

</p>

<p>

Here you can manage products and view generated descriptions.

</p>

</div>

</main>

<Footer/>

</div>

);

}

export default Dashboard;