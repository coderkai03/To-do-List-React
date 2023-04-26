const Navbar = () => {

    return (
        <nav className="navbar">
            <h1>The Rian++ Blog</h1>
            <div className="links">
                <a href="/">Hoom</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Bloog</a>

            </div>
        </nav>
    );
}
 
export default Navbar;