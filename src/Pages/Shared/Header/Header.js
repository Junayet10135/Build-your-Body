import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='sticky-top' >
            <Navbar className='Navbar' collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Build Your Body
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#clients">Clients</Nav.Link>
                            <Nav.Link href="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link  as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
                <h6 className='text-light me-4'>{user?.displayName}</h6>
            </Navbar>
        </div>
    );
};

export default Header;