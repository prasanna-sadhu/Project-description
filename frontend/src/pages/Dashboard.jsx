import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

function Dashboard({ darkMode, setDarkMode }) {
  const [stats, setStats] = useState({
    totalDescriptions: 0,
    productsGenerated: 0,
    thisMonth: 0,
    wordsGenerated: 0,
  });

  const [recentDescriptions, setRecentDescriptions] = useState([]);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/dashboard");

      setStats(res.data.stats || {});
      setRecentDescriptions(res.data.recent || []);
    } catch (error) {
      console.log("Dashboard API not available", error);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchDashboard();
    } catch (error) {
      console.log("Delete Failed");
    }
  };

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

                    const product = item.product || item;

                    return (

                      <tr key={product._id || index}>

                        <td>{product.name}</td>

                        <td>{product.category}</td>

                        <td>{product.tone}</td>

                        <td>

                          <span
                            className="edit"
                            style={{
                              cursor: "pointer",
                              color: "#2563eb",
                              fontWeight: "600",
                            }}
                            onClick={() =>
                              alert("Edit functionality coming soon")
                            }
                          >
                            Edit
                          </span>

                          {" | "}

                          <span
                            className="delete"
                            style={{
                              cursor: "pointer",
                              color: "#dc2626",
                              fontWeight: "600",
                            }}
                            onClick={() =>
                              deleteProduct(product._id)
                            }
                          >
                            Delete
                          </span>

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
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;