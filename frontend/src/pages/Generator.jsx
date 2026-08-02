import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
Input,
Button,
Loader,
Toast
} from "../components/ui";


function Generator({darkMode,setDarkMode}){


const {id}=useParams();


const [productName,setProductName]=useState("");

const [category,setCategory]=useState("");

const [keywords,setKeywords]=useState("");

const [tone,setTone]=useState("");

const [description,setDescription]=useState("");


const [loading,setLoading]=useState(false);


const [showToast,setShowToast]=useState(false);

const [toastMessage,setToastMessage]=useState("");



useEffect(()=>{


if(id){

fetchProduct();

}


},[id]);



const fetchProduct=async()=>{


try{


const token=sessionStorage.getItem("token");


const res=await axios.get(

`http://localhost:5000/api/products/${id}`,

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



setProductName(res.data.name);

setCategory(res.data.category);

setKeywords(res.data.keywords);

setTone(res.data.tone);

setDescription(res.data.description);


}


catch(error){


console.log(

"Fetch Product Error",

error.response?.data

);


}


};





const showMessage=(message)=>{


setToastMessage(message);

setShowToast(true);


setTimeout(()=>{

setShowToast(false);

},2000);


};





const generateDescription=async(e)=>{


e.preventDefault();


try{


setLoading(true);


const token=sessionStorage.getItem("token");



if(!token){

showMessage("Please login first");

return;

}




if(id){



await axios.put(

`http://localhost:5000/api/products/${id}`,

{

name:productName,

category,

keywords,

tone,

description

},

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



showMessage(

"Product Updated Successfully"

);



}

else{



const res=await axios.post(

"http://localhost:5000/api/ai/generate-description",

{

name:productName,

category,

keywords,

tone

},

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



setDescription(

res.data.description

);



showMessage(

"AI Description Generated Successfully"

);


}



window.dispatchEvent(

new Event("dashboardUpdate")

);



}


catch(error){


console.log(

"Generator Error",

error.response?.data

);


showMessage(

error.response?.data?.message ||

"Operation Failed"

);


}


finally{


setLoading(false);


}



};





return(

<>


<Navbar

darkMode={darkMode}

setDarkMode={setDarkMode}

/>



<main className="main-content">


<div className="generator-container">



<div className="generator-form">


<h1>

AI Product Description Generator

</h1>



<form onSubmit={generateDescription}>


<Input

label="Product Name"

value={productName}

onChange={(e)=>setProductName(e.target.value)}

/>



<Input

label="Category"

value={category}

onChange={(e)=>setCategory(e.target.value)}

/>



<Input

label="Keywords"

value={keywords}

onChange={(e)=>setKeywords(e.target.value)}

/>



<Input

label="Tone"

value={tone}

onChange={(e)=>setTone(e.target.value)}

/>



<Button type="submit">

{

id ?

"Update Product"

:

"Generate Description"

}


</Button>


</form>



</div>





<div className="generator-output">


<h2>

Generated Description

</h2>



{

loading && <Loader/>

}



{

!loading && description &&

(

<div className="output-box">

<p>

{description}

</p>

</div>

)

}



{

!loading && !description &&

(

<p>

Your AI-generated description will appear here...

</p>

)

}



{

showToast &&

(

Toast

&&

<Toast message={toastMessage}/>

)

}



</div>



</div>



</main>



<Footer/>


</>

);


}


export default Generator;