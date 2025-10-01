import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function PageEnConstruction({ title }) {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="text-primary mb-4">{title}</h1>
          <div className="bg-light p-5 rounded">
            <h3 className="text-muted mb-3">Page en construction</h3>
            <p className="text-muted">
              Cette page sera remplie plus tard par un cabinet spécialisé.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PageEnConstruction;
