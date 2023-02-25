import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style.css';
import Cartwidget from "../Cartwidget/Cartwidget"
import { Link } from "react-router-dom"

function Barradetareas() {
    return ( 
        <Navbar className="color1" expand="lg">
            <Link to="/inicio">
            <img
                    src={require('../../assets/logo.png')} 
                    
                    className="d-inline-block align-top logo"
                    alt="logo de dips"/></Link>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Link to="/inicio" ClassName="LinK"  >INICIO</Link>
                        <Link to="/about" ClassName="LinK"  >ACERCA DE NOSOTROS</Link>
                        <NavDropdown title="CATEGORÍAS" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">AROS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">DIJES</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                LLAVEROS
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">ANILLOS</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                REGALERÍA
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Link to="/contact" >CONTACTO</Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
            <Cartwidget/>
        </Navbar>
    );
}

export default Barradetareas;