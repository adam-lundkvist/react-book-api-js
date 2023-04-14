import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export function Header() {
  return (
    <header className="header">
      <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#">Open Library API</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}
