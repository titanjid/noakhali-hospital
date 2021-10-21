import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary  sticky-top">
                    <div className="container-fluid">
                    <Navbar.Brand href="/">Noakhali Hospital</Navbar.Brand>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Nav.Link as={HashLink} to ="/home">Home</Nav.Link>
                            </li>
                            <li className="nav-item">
                            <Nav.Link as={HashLink} to="/home#services">services</Nav.Link>
                            </li>
                            <li className="nav-item">
                            <Nav.Link as={HashLink} to ="/doctor">Doctors</Nav.Link>
                            </li>
                            <li className="nav-item">
                            <Nav.Link as={HashLink} to ="/aboutus">About Us</Nav.Link>
                            </li>
                        </ul>
                        </div>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>}
                        <Navbar.Text>
                            User: {user?.displayName}
                        </Navbar.Text>
                    </div>
                    </nav>
        </>
    );
};

export default Header;