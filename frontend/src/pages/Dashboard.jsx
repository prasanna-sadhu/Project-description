import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";


function Dashboard({ darkMode, setDarkMode }) {

  const navigate = useNavigate();

  const [stats, setStats] = useState({

    totalDescriptions: 0,

    productsGenerated: 0,

    thisMonth: 0,

    wordsGenerated: 0,

  });

  const [recentDescriptions,setRecentDescriptions] = useState([]);

  const [searchTerm,setSearchTerm] = useState("");

  const fetchDashboard = async()=>{

    try{

      const token = localStorage.getItem("token");

      if(!token){

        navigate("/login");

        return;

      }
      const res = await axios.get(

        "http://localhost:5000/api/dashboard",

        {

          headers:{

            Authorization:`Bearer ${token}`

          }

        }

      );

      setStats(

        res.data.stats

      );


      setRecentDescriptions(

        res.data.recent || []

      );


    }

    catch(error){


      console.log(

        "Dashboard Error:",

        error.response?.data || error.message

      );


      if(error.response?.status===401){

        localStorage.removeItem("token");

        navigate("/login");

      }

    }

  };

  useEffect(()=>{


    fetchDashboard();

    window.addEventListener(

      "dashboardUpdate",

      fetchDashboard

    );

    return()=>{

      window.removeEventListener(

        "dashboardUpdate",

        fetchDashboard

      );


    };


  },[]);
  const deleteProduct = async(id)=>{

    try{

      const token = localStorage.getItem("token");

      await axios.delete(

        `http://localhost:5000/api/products/${id}`,

        {

          headers:{

            Authorization:`Bearer ${token}`

          }

        }

      );

      fetchDashboard();

    }

    catch(error){


      console.log(

        "Delete Error",

        error.response?.data

      );

    }

  };

  const editProduct=(product)=>{


    navigate(

      `/generator/${product._id}`

    );


  };

  const filteredProducts = recentDescriptions.filter((item)=>{


    const product=item.product || item;



    return (

      product.name?.toLowerCase()

      .includes(searchTerm.toLowerCase())


      ||

      product.category?.toLowerCase()

      .includes(searchTerm.toLowerCase())


      ||

      product.tone?.toLowerCase()

      .includes(searchTerm.toLowerCase())


    );


  });

return(

<div className="page-container">


<Navbar

darkMode={darkMode}

setDarkMode={setDarkMode}

/>



<main className="main-content">


<div className="dashboard-section">


<h1>
Dashboard
</h1>


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




<div className="preview-box">


<div className="preview-header">


<h2>
Product Preview
</h2>


<input

type="text"

className="search-box"

placeholder="Search Product..."

value={searchTerm}

onChange={(e)=>setSearchTerm(e.target.value)}

/>


</div>



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


{

filteredProducts.length>0 ?

filteredProducts.map((product,index)=>{


return(

<tr key={product._id || index}>


<td>{product.name}</td>

<td>{product.category}</td>

<td>{product.tone}</td>


<td>


<span

style={{

color:"#2563eb",

cursor:"pointer",

fontWeight:"600",

marginRight:"12px"

}}

onClick={()=>editProduct(product)}

>

Edit

</span>



|



<span

style={{

color:"#dc2626",

cursor:"pointer",

fontWeight:"600",

marginLeft:"12px"

}}

onClick={()=>deleteProduct(product._id)}

>

Delete

</span>


</td>


</tr>

)


})

:

<tr>

<td colSpan="4">

No Matching Products Found

</td>

</tr>


}


</tbody>


</table>


</div>


</div>


</div>


</main>



<Footer/>


</div>


);


}


export default Dashboard;