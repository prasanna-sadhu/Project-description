import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import {

Input,

Button

}

from "../components/ui";

function Login({

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

<div className="login-container">

<div className="login-box">

<h1>Login</h1>

<p>

This page will contain the login form for users to access their dashboard and manage product descriptions.

</p>

<form>

<Input

label="Email"

type="email"

placeholder="Enter Email"

/>

<Input

label="Password"

type="password"

placeholder="Enter Password"

/>

<Button>

Login

</Button>

</form>

</div>

</div>

</main>

<Footer/>

</div>

);

}

export default Login;