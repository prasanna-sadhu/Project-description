import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

import {
  Toast,
  Modal,
  Button
} from "../components/ui";


const API_URL = import.meta.env.VITE_API_URL;


function Dashboard({ darkMode, setDarkMode }) {


  const navigate = useNavigate();


  const [stats,setStats] = useState({

    totalDescriptions:0,

    productsGenerated:0,

    thisMonth:0,

    wordsGenerated:0

  });


  const [recentDescriptions,setRecentDescriptions] = useState([]);


  const [searchTerm,setSearchTerm] = useState("");


  const [showToast,setShowToast] = useState(false);


  const [toastMessage,setToastMessage] = useState("");


  const [showModal,setShowModal] = useState(false);


  const [deleteId,setDeleteId] = useState(null);



  const showMessage=(message)=>{


    setToastMessage(message);


    setShowToast(true);



    setTimeout(()=>{


      setShowToast(false);


    },2000);


  };




  const fetchDashboard = async()=>{


    try{


      const token = sessionStorage.getItem("token");



      if(!token){


        navigate("/login");


        return;


      }

      const res = await axios.get(

        `${API_URL}/api/dashboard`,

        {

          headers:{

            Authorization:`Bearer ${token}`

          }

        }

      );



      setStats(res.data.stats);


      setRecentDescriptions(

        res.data.recent || []

      );


    }


    catch(error){


      console.log(

        error.response?.data

      );



      showMessage(

        "Failed to load dashboard"

      );


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

  const confirmDelete=(id)=>{


    setDeleteId(id);


    setShowModal(true);


  };


  const deleteProduct=async()=>{


    try{


      const token = sessionStorage.getItem("token");




      await axios.delete(


        `${API_URL}/api/products/${deleteId}`,

        {

          headers:{

            Authorization:`Bearer ${token}`

          }

        }


      );

      setShowModal(false);

      fetchDashboard();
      showMessage(


        "Product deleted successfully"

      );

    }

    catch(error){

      console.log(error.response?.data);

      showMessage(


        "Delete failed"

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


    return(


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

onChange={(e)=>

setSearchTerm(e.target.value)

}

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


filteredProducts.map((product,index)=>(



<tr key={product._id || index}>


<td>{product.name}</td>


<td>{product.category}</td>


<td>{product.tone}</td>



<td>



<Button

onClick={()=>editProduct(product)}

>

Edit

</Button>



<span> | </span>



<Button

onClick={()=>confirmDelete(product._id)}

>

Delete

</Button>



</td>


</tr>


))


:


<tr>


<td colSpan="4">


No products found.

Create your first AI description.


</td>


</tr>


}


</tbody>


</table>


</div>



</div>



</div>


</main>

{

showToast &&

<Toast message={toastMessage}/>

}

<Modal

isOpen={showModal}

onClose={()=>setShowModal(false)}

title="Delete Product"

>


<p>

Are you sure you want to delete this product?

</p>



<Button

onClick={deleteProduct}

>

Confirm Delete

</Button>



</Modal>





<Footer/>



</div>


);



}


export default Dashboard;