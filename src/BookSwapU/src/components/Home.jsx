import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  return (
    <>
    <h2>Looking for a book? Maybe someone has it!</h2>
    <p>Sign up to search for swaps and create your profile!</p>
    <div className="signup">
      <Link to="/login" className="btn btn-primary mt-3" type="button">
        Sign Up
      </Link>
      </div>
    <h1>Features</h1>
     </>
  )
}
    
export default Home