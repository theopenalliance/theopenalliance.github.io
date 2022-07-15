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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="link-light">
              Join
            </Nav.Link>
            <Nav.Link href="/teams/2022" className="link-light">
              2022 Teams
            </Nav.Link>
            <Nav.Link href="#link" className="link-light">
              2023 Teams
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
