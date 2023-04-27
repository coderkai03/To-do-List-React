import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="navbar">
            <h1>The Rian++ Blog</h1>
            <div className="links">
                <Link to="/">Hoom</Link>
                <Link to="/create">New Bloog</Link>

            </div>
        </nav>
    );
}
 
export default Navbar;