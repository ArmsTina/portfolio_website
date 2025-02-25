import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../scss/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <div className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand className="me-auto" href="/">
            DONGYOUNG YANG
          </Navbar.Brand>

          <div className="d-flex align-items-center order-md-1 order-lg-2">
            <span
              className="dark-mode-toggle me-2-md ms-2"
              onClick={toggleDarkMode}
            >
              <FontAwesomeIcon icon={faCircleHalfStroke} className="icon" />
            </span>
            <Navbar.Toggle className={`${darkMode ? "dark-mode-btn" : ""}`} />
          </div>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="order-md-2 order-lg-1"
          >
            <Nav className="ms-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <NavDropdown title="PORTFOLIO" id="basic-nav-dropdown">
                <NavDropdown.Item href="/portfolio1">
                  Little Lemon Restaurant
                </NavDropdown.Item>
                <NavDropdown.Item href="/portfolio2">
                  Wordle Game Website
                </NavDropdown.Item>
                <NavDropdown.Item href="/portfolio3">
                  Portfolio Website
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="https://github.com/ArmsTina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Projects on Github!
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
