import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Collection</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Notes
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Important</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Not Important</DropdownItem>
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
