import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import {useState,useEffect} from "react";


import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Generator from "./pages/Generator";
import OAuthSuccess from "./pages/OAuthSuccess";


import PrivateRoute from "./components/PrivateRoute";


import "./App.css";



function App(){


const [darkMode,setDarkMode] = useState(false);

useEffect(()=>{

const theme =
localStorage.getItem("theme");

if(theme==="true"){

setDarkMode(true);

}

},[]);

return(


<div className={darkMode ? "dark-mode":""}>


<BrowserRouter>

<Routes>

<Route

path="/"

element={

<Home

darkMode={darkMode}

setDarkMode={setDarkMode}

/>

}

/>

<Route

path="/about"

element={

<About

darkMode={darkMode}

setDarkMode={setDarkMode}

/>

}

/>
<Route

path="/login"

element={

<Login

darkMode={darkMode}

setDarkMode={setDarkMode}

/>

}

/>

<Route

path="/oauth-success"

element={<OAuthSuccess/>}

/>

<Route

path="/dashboard"

element={

<PrivateRoute>

<Dashboard

darkMode={darkMode}

setDarkMode={setDarkMode}

/>

</PrivateRoute>

}

/>

<Route

path="/generator"

element={

<PrivateRoute>

<Generator

darkMode={darkMode}

setDarkMode={setDarkMode}

/>

</PrivateRoute>

}

/>

<Route

path="/generator/:id"

element={

<PrivateRoute>

<Generator

darkMode={darkMode}

setDarkMode={setDarkMode}

/>

</PrivateRoute>

}

/>

</Routes>

</BrowserRouter>

</div>

);
}

export default App;