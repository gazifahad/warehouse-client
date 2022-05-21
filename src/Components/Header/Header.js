import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../logo.ico"

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div>

<Navbar bg="dark" variant="dark" expand="lg">
  <Container>
  <Navbar.Brand as={Link} to="/home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' '}
      GreenStock
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/manageitems">Manage Items</Nav.Link>
    <Nav.Link as={Link} to="/additem">Add Item</Nav.Link>
    <Nav.Link as={Link} to="/myitems">My items</Nav.Link>
    <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      </Nav>
      <Nav className="ms-auto">    
    {user ? <span className="d-flex align-items-center"><span className="text-light">{user?.displayName}</span><Nav.Link onClick={logout}>Logout</Nav.Link></span>  :
    <Nav.Link as={Link} to="/login">Login</Nav.Link>
    }
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>      
    </div>
  );
};

export default Header;
