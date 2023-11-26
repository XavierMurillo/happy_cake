import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBarComponent = () => {
  return (
    <Navbar expand="lg" bg="danger">
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <div style={{ display: "flex", flexGrow: 1 }}>
          <Link to="/" className="text-white text-decoration-none ms-3">
            🏠 Home
          </Link>
          <Link to="/contacto" className="text-white text-decoration-none ms-3">
            📒 Contacto
          </Link>
        </div>
        <Navbar.Brand className="text-white justify-content-end">
          Happy Cake 🍰
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
