import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Avatar, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { ChatState } from '../Context/ChatProvider'





// Define the NavBar functional component
const NavBar = () => {
  const { user } = ChatState() // to use for user initials in avatar 

  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem("userInfo")
    navigate('/login')
  }

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

 
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <Avatar 
                size="sm"
                cursor="pointer" 
                />
              </MenuButton>
              <MenuList>
                <MenuItem><Link to="/profile">Profile</Link></MenuItem>
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