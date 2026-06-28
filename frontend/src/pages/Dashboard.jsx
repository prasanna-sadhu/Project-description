import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui";
import axios from "axios";

function Dashboard({ darkMode, setDarkMode }) {

  const [stats, setStats] = useState({
    totalDescriptions: 0,
    productsGenerated: 0,
    thisMonth: 0,
    wordsGenerated: 0,
  });

  const [recentDescriptions, setRecentDescriptions] = useState([]);

  useEffect(() => {

    const fetchDashboard = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/dashboard");

        console.log("API RESPONSE:", res.data); 

        setStats(res.data.stats || {});
        setRecentDescriptions(res.data.recent || []);

      } catch (error) {
        console.log("Dashboard API not available", error);
      }
    };

    fetchDashboard();

  }, []);

  return (

    <div className="page-container">

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="main-content">

        <div className="dashboard-section">

          <h1>Dashboard</h1>

          <div className="stats-grid">

            <div className="dashboard-card">
              <h3>Total Descriptions</h3>
              <p>{stats.totalDescriptions}</p>
            </div>

            <div className="dashboard-card">
              <h3>Products Generated</h3>
              <p>{stats.productsGenerated}</p>
            </div>

            <div className="dashboard-card">
              <h3>This Month</h3>
              <p>{stats.thisMonth}</p>
            </div>

            <div className="dashboard-card">
              <h3>Words Generated</h3>
              <p>{stats.wordsGenerated}</p>
            </div>

          </div>

          <div className="table-section">

            <div className="table-container">

              <table>

                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Tone</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {recentDescriptions.length > 0 ? (

                    recentDescriptions.map((item, index) => {

                      // SAFE FIX: handle both formats
                      const product = item.product || item;

                      return (
                        <tr key={index}>

                          <td>{product.name || "N/A"}</td>
                          <td>{product.category || "N/A"}</td>
                          <td>{product.tone || "N/A"}</td>

                          <td>
                            <Button>View</Button>
                          </td>

                        </tr>
                      );
                    })

                  ) : (

                    <tr>
                      <td colSpan="4">
                        No Descriptions Generated Yet
                      </td>
                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>

  );

}

export default Dashboard;