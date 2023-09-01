import React from 'react'
import { Link } from "react-router-dom"

// Define the NavBar functional component
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle">
      <div className="container-fluid">
        {/* Link to the page */}
        <Link className="navbar-brand" to="/">
          BookSwapU
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* Link to the page */}
            <Link className="nav-link active" aria-current="page" to="/search">
              Search
            </Link>
            {/* Link to the page */}
            <Link className="nav-link" to="/usersbooks">
              My Books
            </Link>
            {/* Link to the page */}
            <Link className="nav-link" to="/messages">
              Messages
            </Link>
            {/* Link to the page */}
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar