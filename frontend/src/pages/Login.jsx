import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Input, Button } from "../components/ui";

import { AuthContext } from "../context/AuthContext";


const API_URL = import.meta.env.VITE_API_URL;



function Login({ darkMode, setDarkMode }) {


  const [loginMode, setLoginMode] = useState(true);



  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");



  const [message,setMessage] = useState("");



  const { login } = useContext(AuthContext);



  const navigate = useNavigate();

  const submitHandler = async(e)=>{

    e.preventDefault();

    try{

      if(loginMode){

        const res = await axios.post(


          `${API_URL}/api/auth/login`,

          {

            email,

            password

          }
        );

        setMessage("Login Successful");

        login(res.data.token);
        setTimeout(()=>{

          navigate("/dashboard");

        },1000);

      }

      else{

        const res = await axios.post(


          `${API_URL}/api/auth/register`,

          {

            email,

            password

          }

        );

        setMessage(

          res.data.message

        );

        setTimeout(()=>{

          setLoginMode(true);

          setMessage("");

        },1500);

      }

    }

    catch(error){

      setMessage(


        error.response?.data?.message ||


        "Something went wrong"
      );

    }

  };

  const googleLogin = ()=>{

    window.location.href =


    `${API_URL}/api/auth/google`;



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


{


loginMode ?


"Login"

:

"Register"

}

</h1>

<form onSubmit={submitHandler}>



<Input


label="Email"


type="email"


placeholder="Enter Email"


value={email}


onChange={(e)=>setEmail(e.target.value)}


/>
<Input


label="Password"


type="password"


placeholder="Enter Password"


value={password}


onChange={(e)=>setPassword(e.target.value)}


/>
<Button type="submit">

{

loginMode ?


"Login"


:


"Register"
}

</Button>

</form>

<button


className="google-btn"

onClick={googleLogin}

>

Sign in with Google

</button>

{

message &&
<p


style={{

marginTop:"15px",

fontWeight:"600"
}}

>

{message}

</p>

}

<p


style={{


cursor:"pointer",


marginTop:"15px"



}}


onClick={()=>{



setLoginMode(!loginMode);


setMessage("");



}}

>

{

loginMode


?


"Don't have an account? Register"


:


"Already have an account? Login"

}

</p>

</div>

</div>

</main>

<Footer/>

</div>

);

}

export default Login;