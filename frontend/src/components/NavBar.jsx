import { Link } from "react-router-dom"

function NavBar(){
    return <nav>
        <div className="navbar">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorite" className="nav-link">Favorite</Link>
        </div>
    </nav>
}
export default NavBar;