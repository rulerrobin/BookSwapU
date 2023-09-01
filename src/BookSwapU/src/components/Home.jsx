import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
  return (
    <div className="container">

      <div className="top-content">
        <h2>Looking for a book? Maybe someone has it!</h2>
        <p>Sign up to search for swaps and create your profile!</p>
        <div className="signup">
          <Link to="/login" className="btn btn-primary mt-3" type="button">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="features-content">
        <div className="feature-header">
          <h1>Features</h1>
        </div>

        <div className="feature-items">
          <div className="feature-item">
            <img src="path_to_image.jpg" alt="pic" />
            <h3>Select Search Topic</h3>
            <p>You are able to search using the title, author, poster and even condition</p>
          </div>
          <div className="feature-item">
            <img src="path_to_image.jpg" alt="pic" />
            <h3>Make Request</h3>
            <p>When you find a book you like you can message the user and talk about what to swap</p>
          </div>
          <div className="feature-item">
            <img src="path_to_image.jpg" alt="pic" />
            <h3>Book Management</h3>
            <p>You are able to manage the books you own and choose what is swappable</p>
          </div>
          <div className="feature-item">
            <img src="path_to_image.jpg" alt="pic" />
            <h3>More Sustainable</h3>
            <p>Instead of spending on books, swap is for free and is more eco friendly</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;
