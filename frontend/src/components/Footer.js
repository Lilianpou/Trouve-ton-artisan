import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primary text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h6>Pages légales</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-white text-decoration-none"
                  style={{ opacity: 0.9 }}
                  onMouseEnter={(e) => (e.target.style.opacity = 1)}
                  onMouseLeave={(e) => (e.target.style.opacity = 0.9)}
                >
                  mentions légales
                </Link>
              </li>
              <li>
                <Link
                  to="/donnees-personnelles"
                  className="text-white text-decoration-none"
                  style={{ opacity: 0.9 }}
                  onMouseEnter={(e) => (e.target.style.opacity = 1)}
                  onMouseLeave={(e) => (e.target.style.opacity = 0.9)}
                >
                  données personnelles
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibilite"
                  className="text-white text-decoration-none"
                  style={{ opacity: 0.9 }}
                  onMouseEnter={(e) => (e.target.style.opacity = 1)}
                  onMouseLeave={(e) => (e.target.style.opacity = 0.9)}
                >
                  accessibilité
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-white text-decoration-none"
                  style={{ opacity: 0.9 }}
                  onMouseEnter={(e) => (e.target.style.opacity = 1)}
                  onMouseLeave={(e) => (e.target.style.opacity = 0.9)}
                >
                  cookies
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={6} className="text-end">
            <address className="mb-0">
              <strong>101 cours Charlemagne</strong>
              <br />
              CS 20033
              <br />
              69269 LYON CEDEX 02
              <br />
              France
              <br />
              <strong>+33 (0)4 26 73 40 00</strong>
            </address>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
