import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap/lib';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <Navbar inverse collapseOnSelect>
	  <Navbar.Header>
	    <Navbar.Brand>
	      <a href="#brand">RE</a>
	    </Navbar.Brand>
	    <Navbar.Toggle />
	  </Navbar.Header>
	  <Navbar.Collapse>
	    <Nav>
	      {/* Don't use eventKey with NavItem or */}
	      <IndexLinkContainer to="/">
		    <NavItem >Home</NavItem>
		  </IndexLinkContainer>
		  <LinkContainer to="/about">
		    <NavItem >About</NavItem>
		  </LinkContainer>
		  <LinkContainer to="/schedule">
		    <NavItem >Schedule</NavItem>
		  </LinkContainer>
		  <LinkContainer to="/calculator">
		    <NavItem >Calculator</NavItem>
		  </LinkContainer>
        </Nav>
        <Nav pullRight>
       	  <NavItem eventKey={1} href="#">
	        Sign In
	      </NavItem>
	      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
	        <MenuItem eventKey={3.1}>Action</MenuItem>
	        <MenuItem eventKey={3.2}>Another action</MenuItem>
	        <MenuItem eventKey={3.3}>Something else here</MenuItem>
	        <MenuItem divider />
	        <MenuItem eventKey={3.3}>Separated link</MenuItem>
	      </NavDropdown>
	    </Nav>
	  </Navbar.Collapse>
	</Navbar>
  </header>
)

    {/*<nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
        <li><Link to='/calculator'>Calculator</Link></li>
      </ul>
    </nav>*/}

export default Header