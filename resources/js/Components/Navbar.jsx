// Navbar.jsx
import React from 'react';
import { usePage, Link } from '@inertiajs/react';
import { Navbar, Container,Nav } from 'react-bootstrap';

export default function TopNavbar() {
      const { auth } = usePage().props;
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#">Admin Panel</Navbar.Brand>
        <Nav className="ms-auto">
          <span className="text-muted">Halo, {auth.user.name}</span>

           <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

