import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Assure-toi d'avoir un fichier CSS pour le style personnalisé
import { Menu, People } from '@mui/icons-material';

const AppNavbar = ({ onToggleSidebar }) => {
  const [expanded, setExpanded] = useState(false);

  const handleLogout = () => {
    // Logique de déconnexion ici
    console.log('User logged out');
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" expanded={expanded}>
      <Navbar.Brand href="#home">
        <Button variant="outline-primary" onClick={onToggleSidebar}>
          <Menu />
        </Button>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown
            title={<People size={24} />}
            id="basic-nav-dropdown"
            align="end"
          >
            <NavDropdown.Item href="#profile">View Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
