import React from "react";
import logo from "../images/logo/nobg.svg";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavbarBrand, NavDropdown } from "react-bootstrap";

export default function Navbar_(): JSX.Element {
  const logoSize = 48;
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <NavbarBrand href="/">
          <img
            src={logo}
            alt=""
            width={logoSize}
            height={logoSize}
            className="d-inline-block align-middle"
          />
          <span className="h3 align-middle oa text-white">
            The Open Alliance
          </span>
        </NavbarBrand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-light"
          style={{
            // The hamburger icon is an svg so we need to put a filter on it to recolor it.
            // This changes it to white so it's more visible
            // https://stackoverflow.com/a/53336754
            filter:
              "invert(100%) sepia(0%) saturate(0%) hue-rotate(332deg) brightness(105%) contrast(103%)",
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/join" className="link-light">
              Join
            </Nav.Link>
            <Nav.Link href="/teams/2022" className="link-light">
              2022 Teams
            </Nav.Link>
            <Nav.Link href="/teams/2023" className="link-light">
              2023 Teams
            </Nav.Link>
            <Nav.Link href="/teams/2024" className="link-light">
              2024 Teams
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
