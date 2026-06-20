import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Login()
{
    return(
        <div className="page-container">
            <Navbar/>
            <main className="main-content">
                <div className="login-container">
                    <div className="login-box">
                <h1>Login</h1>
                <p>This page will contain the login form for users to access their dashboard and manage product descriptions.</p>
             <form>
                <input
                type="email"
                placeholder="Email"
                required
                />
                <input
                type="password"
                placeholder="Password"
                required
                />
                <button type="submit">Login</button>
             </form>
             </div>
             </div>
            </main> 
            <Footer/>
        </div>  
    );
}
export default Login;   