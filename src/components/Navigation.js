import React from 'react';
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {Navbar , Nav , Button} from 'react-bootstrap';  
import ButtonLogout from './ButtonLogout';

function Navigation() {

  const isLogged = useSelector((state) => state.Sign.Log);

    return (
        <div>

        <Navbar bg="dark" variant="dark" className="mb-5">
          <Nav className="mr-auto d-flex flex-lg-row w-100">
          <Link to = "/" className="nav-link">Home</Link>
          <Link to = "/catalog" className="nav-link">Catalog</Link>
          {isLogged ? 
          <>
            <Link to = "/cart" className="nav-link">Cart</Link>
            <div className="d-flex flex-row justify-content-lg-end w-100">
            <ButtonLogout/>
            </div>
          </>
          :
          <>
            <Link to = "/register" className="nav-link">Register</Link>
            <Link to = "/login" className="nav-link">Login</Link>
          </>
          }
          </Nav>
        </Navbar>

        </div>
    )
}

export default Navigation
