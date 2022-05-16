import { Navbar, Nav, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';

function MyNavbar() {
  
  return(
    <div>
  <Navbar
      color="dark"
      container="md"
      dark
      expand="lg"
      fixed="top"
      light
  >
    <NavbarBrand  href="/">
      Своя Игра
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
      </Nav>

    </Collapse>
  </Navbar>
</div>
  )
}

export default MyNavbar;
