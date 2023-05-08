import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style.css';
import Cartwidget from "../Cartwidget/Cartwidget"
import {Link} from "react-router-dom"
import Brand from "../../assets/logo.png"

function NavBar({quantity}) {
    return ( 
        <Navbar className="color1" expand="lg">
         <Link to ="/"><img src={Brand}  className="d-inline-block align-top logo"  alt="logo de dips"/></Link>  
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">
                    <Link to ="/" className='letra'>  <Nav.Link href="#home">INICIO</Nav.Link></Link>
                   <Link to ="" className='letra'> <Nav.Link>ACERCA DE NOSOTROS</Nav.Link></Link>
                        <NavDropdown title="CATEGORÍAS" id="basic-nav-dropdown">
                        <Link to ={`/category/aros`} className='letra'>     <NavDropdown.Item href="#action/3.1">AROS</NavDropdown.Item></Link>
                        <Link to ={`/category/dijes`} className='letra'>   <NavDropdown.Item href="#action/3.1">DIJES</NavDropdown.Item></Link>
                        <Link to ={`/category/llaveros`} className='letra'>  <NavDropdown.Item href="#action/3.2">
                                LLAVEROS
                            </NavDropdown.Item></Link>
                            <Link to ={`/category/anillos`} className='letra'>   <NavDropdown.Item href="#action/3.3">ANILLOS</NavDropdown.Item></Link>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                REGALERÍA
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">CONTACTO</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
            <Cartwidget/>
        </Navbar>
    );
}

export default NavBar;