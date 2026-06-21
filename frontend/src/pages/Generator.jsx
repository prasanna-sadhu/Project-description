import { useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import {

Input,

Button,

Loader,

Toast

}

from "../components/ui";

function Generator({

darkMode,

setDarkMode

})

{

const [productName,setProductName]=useState("");

const [category,setCategory]=useState("");

const [keywords,setKeywords]=useState("");

const [tone,setTone]=useState("");

const [loading,setLoading]=useState(false);

const [showToast,setShowToast]=useState(false);

const generateDescription=(e)=>{

e.preventDefault();

setLoading(true);

setShowToast(false);

setTimeout(()=>{

setLoading(false);

setShowToast(true);

},2000);

};

return(

<div className="page-container">

<Navbar

darkMode={darkMode}

setDarkMode={setDarkMode}

/>

<main className="main-content">

<div className="login-container">

<div className="login-box">

<h1>

AI Product Description Generator

</h1>

<p>

Enter product details to generate a description.

</p>

<form onSubmit={generateDescription}>

<Input

label="Product Name"

placeholder="Turmeric Powder"

value={productName}

onChange={(e)=>setProductName(e.target.value)}

/>

<Input

label="Category"

placeholder="Spices"

value={category}

onChange={(e)=>setCategory(e.target.value)}

/>

<Input

label="Keywords"

placeholder="Organic, Healthy"

value={keywords}

onChange={(e)=>setKeywords(e.target.value)}

/>

<Input

label="Tone"

placeholder="Premium"

value={tone}

onChange={(e)=>setTone(e.target.value)}

/>

<Button type="submit">

Generate Description

</Button>

</form>

{loading && <Loader/>}

{showToast && (

<Toast

message="Description Generated Successfully "

/>

)}

</div>

</div>

</main>

<Footer/>

</div>

);

}

export default Generator;