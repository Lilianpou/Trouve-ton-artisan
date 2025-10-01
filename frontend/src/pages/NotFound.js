import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function NotFound() {
  return (
    <Container className="py-5">
      <SEO
        title="Page non trouvée - Erreur 404"
        description="La page que vous recherchez est introuvable. Retournez à l'accueil pour découvrir nos artisans qualifiés en Auvergne-Rhône-Alpes."
        url="https://trouve-ton-artisan.fr/404"
      />
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h1 className="text-dark mb-4" style={{ fontSize: "2.5rem" }}>
            Page non trouvée
          </h1>

          {/* Zone d'image 404 */}
          <div
            className="mx-auto mb-4"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "300px",
              border: "3px solid #007bff",
              borderRadius: "10px",
              backgroundColor: "#f8f9fa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Icône de fermeture en haut à droite */}
            <div
              style={{
                position: "absolute",
                top: "15px",
                right: "20px",
                color: "#007bff",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              ✕
            </div>

            {/* Icône "U" en haut à gauche */}
            <div
              style={{
                position: "absolute",
                top: "15px",
                left: "20px",
                color: "#007bff",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              U
            </div>

            {/* Zone centrale avec 404 */}
            <div
              style={{
                backgroundColor: "rgba(135, 206, 250, 0.3)",
                padding: "40px",
                borderRadius: "15px",
                width: "80%",
                height: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: "6rem",
                  fontWeight: "bold",
                  color: "#007bff",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                404
              </div>
            </div>
          </div>

          {/* Message d'erreur */}
          <div className="mb-4">
            <p
              className="lead text-muted"
              style={{ fontSize: "1.2rem", lineHeight: "1.6" }}
            >
              La page que vous avez demandée est introuvable.
            </p>
          </div>

          {/* Suggestions */}
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
