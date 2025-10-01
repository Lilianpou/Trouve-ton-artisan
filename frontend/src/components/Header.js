import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/artisans?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate("/artisans");
    }
  };

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="mb-0 py-3"
      style={{ borderBottom: "1px solid #dee2e6" }}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="d-flex align-items-center me-4">
            <div>
              <div
                className="fw-bold text-dark"
                style={{ fontSize: "1.8rem", marginBottom: "-5px" }}
              >
                Trouve ton artisan !
              </div>
              <div
                className="text-primary small"
                style={{ fontSize: "0.85rem" }}
              >
                Avec la région Auvergne-Rhône-Alpes
              </div>
            </div>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer
              to={{ pathname: "/artisans", search: "?category=Alimentation" }}
            >
              <Nav.Link className="mx-2 text-dark fw-normal">
                Alimentation
              </Nav.Link>
            </LinkContainer>
            <LinkContainer
              to={{ pathname: "/artisans", search: "?category=Fabrication" }}
            >
              <Nav.Link className="mx-2 text-dark fw-normal">
                Fabrication
              </Nav.Link>
            </LinkContainer>
            <LinkContainer
              to={{ pathname: "/artisans", search: "?category=Services" }}
            >
              <Nav.Link className="mx-2 text-dark fw-normal">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to={{ pathname: "/artisans", search: "?category=Bâtiment" }}
            >
              <Nav.Link className="mx-2 text-dark fw-normal">Bâtiment</Nav.Link>
            </LinkContainer>
          </Nav>

          <Form className="d-flex" onSubmit={handleSearch}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Rechercher un artisan..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #ced4da",
                }}
              />
              <Button
                type="submit"
                variant="outline-secondary"
                style={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  backgroundColor: "#6c757d",
                  borderColor: "#6c757d",
                  color: "white",
                }}
              >
                🔍
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
