import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Dashboard()
{
    return(
        <div className="page-container">
            <Navbar/>
            <main className="main-content">
                <div className="dashboard-section">

                <h1>Dashboard</h1>
                <p>This dashboard will display generated descriptions,recent activity and product management features.</p>
          
          </div>
            </main>
            <Footer/>
        </div>
    );
}
export default Dashboard;