import { Link } from "react-router-dom";

function Navbar({

darkMode,

setDarkMode

}) {

const toggleTheme = () => {

const newTheme = !darkMode;

setDarkMode(newTheme);

localStorage.setItem("theme",newTheme);

};

return(

<nav className="navbar">

<h2 className="logo">

AI Product Description Generator

</h2>

<div className="nav-Links">

<Link to="/">Home</Link>

<Link to="/about">About</Link>

<Link to="/dashboard">Dashboard</Link>

<Link to="/login">Login</Link>

<button

className="theme-icon"

onClick={toggleTheme}

>

{darkMode ? "☀️" : "🌙"}

</button>

</div>

</nav>

);

}

export default Navbar;