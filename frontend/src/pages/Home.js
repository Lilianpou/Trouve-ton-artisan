import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="home-page">
      <Container className="py-5">
        {/* Section Comment trouver mon artisan */}
        <Row className="mb-5">
          <Col lg={6} className="pe-lg-5">
            <h2 className="text-primary mb-4">Comment trouver mon artisan ?</h2>

            <div className="step-list">
              <div className="step-item d-flex align-items-start mb-3">
                <div
                  className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: "40px", height: "40px" }}
                >
                  1
                </div>
                <div>
                  <strong>
                    Choisir la catégorie d'artisanat dans le menu.
                  </strong>
                </div>
              </div>

              <div className="step-item d-flex align-items-start mb-3">
                <div
                  className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: "40px", height: "40px" }}
                >
                  2
                </div>
                <div>
                  <strong>Choisir un artisan.</strong>
                </div>
              </div>

              <div className="step-item d-flex align-items-start mb-3">
                <div
                  className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: "40px", height: "40px" }}
                >
                  3
                </div>
                <div>
                  <strong>Le contacter via le formulaire de contact.</strong>
                </div>
              </div>

              <div className="step-item d-flex align-items-start mb-3">
                <div
                  className="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: "40px", height: "40px" }}
                >
                  4
                </div>
                <div>
                  <strong>Une réponse sera apportée sous 48h.</strong>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="d-flex align-items-center">
            <div className="text-center w-100">
              <div className="bg-light p-4 rounded">
                <p className="text-muted mb-0">
                  Trouvez facilement l'artisan qu'il vous faut en quelques clics
                  !
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Section Les trois artisans du mois */}
        <Row>
          <Col>
            <div className="text-center mb-4">
              <h2 className="text-primary">Les trois artisans du mois</h2>
            </div>

            <Row className="justify-content-center">
              <Col md={4} className="mb-4">
                <div className="card h-100 bg-primary text-white">
                  <div className="card-body text-center">
                    <h5 className="card-title mb-3">Artisan Example 1</h5>
                    <div className="mb-2">
                      <span className="text-warning">★★★★★</span>
                    </div>
                    <p className="card-text">
                      <strong>Spécialité :</strong>
                      <br />
                      Menuiserie
                    </p>
                    <p className="card-text">
                      <strong>Localisation :</strong>
                      <br />
                      Lyon
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="card h-100 bg-primary text-white">
                  <div className="card-body text-center">
                    <h5 className="card-title mb-3">Artisan Example 2</h5>
                    <div className="mb-2">
                      <span className="text-warning">★★★★☆</span>
                    </div>
                    <p className="card-text">
                      <strong>Spécialité :</strong>
                      <br />
                      Plomberie
                    </p>
                    <p className="card-text">
                      <strong>Localisation :</strong>
                      <br />
                      Villeurbanne
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="card h-100 bg-primary text-white">
                  <div className="card-body text-center">
                    <h5 className="card-title mb-3">Artisan Example 3</h5>
                    <div className="mb-2">
                      <span className="text-warning">★★★★☆</span>
                    </div>
                    <p className="card-text">
                      <strong>Spécialité :</strong>
                      <br />
                      Électricité
                    </p>
                    <p className="card-text">
                      <strong>Localisation :</strong>
                      <br />
                      Caluire
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
