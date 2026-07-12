import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";


function Navbar({

darkMode,

setDarkMode

}) {

const { token, logout } = useContext(AuthContext);

const navigate = useNavigate();

const toggleTheme = () => {

const newTheme = !darkMode;

setDarkMode(newTheme);

localStorage.setItem(
"theme",
newTheme
);

};

const handleLogout = () => {


logout();

navigate("/login");

};

return(

<nav className="navbar">

<h2 className="logo">

AI Product Description Generator

</h2>

<div className="nav-Links">

<Link to="/">
Home
</Link>
<Link to="/about">
About
</Link>

{

token &&

<Link to="/dashboard">
Dashboard
</Link>

}

{

token ?


<Link

to="/login"

className="login-btn"

onClick={handleLogout}

>

Logout

</Link>
:

<Link

to="/login"

className="login-btn"

>

Login

</Link>


}

<button

className="theme-icon"

onClick={toggleTheme}

>

{

darkMode ? "☀️" : "🌙"

}


</button>



</div>


</nav>


);


}


export default Navbar;