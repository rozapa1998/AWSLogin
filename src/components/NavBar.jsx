import React from 'react'
import {Link} from "react-router-dom"
import { Navbar, Container, NavLink,  } from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{borderRadius:"10px", marginBottom:"20px"}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="src\assets\logo-teclab.svg"
              width="100"
              height="100"
            />{' '}
          </Navbar.Brand>
          <Link to="/AdminLoggin" className='btn btn-primary p-2' style={{color:"white", marginRight:"30px"}}>Admin</Link>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar