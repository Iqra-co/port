import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark shadow-sm py-3">
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-uppercase"
          style={{ letterSpacing: "1px" }}
        >
          📚 Books Library
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link
              as={Link}
              to="/"
              className="px-3 fw-semibold nav-link-custom"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/books"
              className="px-3 fw-semibold nav-link-custom"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="px-3 fw-semibold nav-link-custom"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Extra CSS Styling */}
      <style>{`
        .nav-link-custom {
          transition: color 0.3s ease, border-bottom 0.3s ease;
          border-bottom: 2px solid transparent;
        }
        .nav-link-custom:hover {
          color: #f8d210 !important;
          border-bottom: 2px solid #f8d210;
        }
      `}</style>
    </Navbar>
  );
}

export default NavScrollExample;
