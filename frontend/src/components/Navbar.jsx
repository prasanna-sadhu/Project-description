import {Link} from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="Logo">AI Product Description Generator</h2>
            <div className="nav-Links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
}
export default Navbar;