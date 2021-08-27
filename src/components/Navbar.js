import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light color="light" expand="md">
        <NavbarBrand href="/">E N V Y</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav-items mr-auto" navbar>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Collection</NavLink>
            </NavItem>
            <UncontrolledDropdown>
              <DropdownToggle nav caret>
                Notes
              </DropdownToggle>
              <DropdownMenu left>
                <Link className="no-decor" to="/notes/notes">
                  <DropdownItem>Notes</DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link className="no-decor" to="/notes/favorites">
                  <DropdownItem>Favorites</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Link to="/signin">
            <Button className="button-margin" outline color="success">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="button-margin" outline color="success">
              Sign Up
            </Button>
          </Link>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
