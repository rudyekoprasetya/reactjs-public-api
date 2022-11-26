import {Link} from "react-router-dom"

function NavBar () {
	return (
		 <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">NewsAPI</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/sport">Sport</Link>
                        <Link className="nav-link" to="/technology">Technology</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </div>
                    </div>
                </div>
                </nav>
        </div>
	);
}

export default NavBar;