import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top"className="navbar-collapse pb-3">
                <Container>
                <Navbar.Brand href="/">Noakhali Hospital</Navbar.Brand>
                <Nav>
                <Nav.Link as={HashLink} to ="/home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#services">services</Nav.Link>
                <Nav.Link as={HashLink} to ="/doctor">Doctors</Nav.Link>
                <Nav.Link as={HashLink} to ="/aboutus">About Us</Nav.Link>
                <Nav.Link as={HashLink} to ="/loging">Loing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;