import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: "#2C355B",
          height: "80px",
          fontFamily: "serif",
        }}
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h1>SmartEx</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fw-bold">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="home#products">Products</Nav.Link>
              <Nav.Link href="home#new">New</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Manage Item
                </NavDropdown.Item>
                <NavDropdown.Item href="/allitem">All Item</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">My Item</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>

              {user && (
                <>
                  <Nav.Link as={Link} to="addproduct">
                    Add Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="orders">
                    Orders
                  </Nav.Link>

                  <NavDropdown
                    title="Manage Inventories"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item as={Link} to="manage">
                      Manage Inventories
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="allitem">
                      All Inventories
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="myitem">
                      My Item
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}

              {user ? (
                <Button
                  className="rounded-pill"
                  style={{
                    backgroundColor: " #0cbaba",
                    backgroundImage:
                      "linear-gradient(315deg, #0cbaba 0%, #380036 74%)",
                  }}
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              ) : (
                <Nav.Link as={Link} to="login">
                  <Button
                    className="rounded-pill"
                    style={{
                      backgroundColor: " #0cbaba",
                      backgroundImage:
                        "linear-gradient(315deg, #0cbaba 0%, #380036 74%)",
                    }}
                  >
                    Sign In
                  </Button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
