import React from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Avatar, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { ChatState } from '../Context/ChatProvider'





// Define the NavBar functional component
const NavBar = () => {
  const { user } = ChatState() // to use for user initials in avatar 

  const navigate = useNavigate()

  const location = useLocation(); // Get the current route location

  const logoutHandler = () => {
    localStorage.removeItem("userInfo")
    navigate('/login')
  }

  // Define the routes where you want the NavBar to be hidden
  const hideNavBarOnRoutes = ['/', '/login'] // Add more routes as needed

  // Check if the current route should hide the NavBar
  const shouldHideNavBar = hideNavBarOnRoutes.includes(location.pathname)

  if (shouldHideNavBar) {
    return null; // Don't render the NavBar on the specified routes
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle">
      <div className="container-fluid">
        {/* Link to the page */}
        <Link className="navbar-brand" to="/search">
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
            <Link className="nav-link" to="/profile">
              Profile
            </Link>

            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <Avatar 
                size="sm"
                cursor="pointer" 
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default NavBar