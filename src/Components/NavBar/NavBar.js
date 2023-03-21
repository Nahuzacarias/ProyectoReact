import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style.css';
import Cartwidget from "../Cartwidget/Cartwidget"

function NavBar() {
    return ( 
        <Navbar className="color1" expand="lg">
            <img
                    src={require('../../assets/logo.png')} 
                    
                    className="d-inline-block align-top logo"
                    alt="logo de dips"/>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">INICIO</Nav.Link>
                    <Nav.Link href="#home">ACERCA DE NOSOTROS</Nav.Link>
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
                        <Nav.Link href="#home">CONTACTO</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
            <Cartwidget/>
        </Navbar>
    );
}

export default NavBar;