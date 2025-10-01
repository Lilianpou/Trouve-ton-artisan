import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        setLoading(true);
        // Utiliser l'endpoint /top pour récupérer les artisans top de la base de données
        const response = await fetch("http://localhost:4000/api/artisans/top");

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const result = await response.json();
        console.log("Réponse API:", result); // Debug

        if (result.success && result.data) {
          // Si on a des artisans top, on les prend, sinon on prend les 3 premiers de tous les artisans
          let artisansToShow = result.data;

          if (artisansToShow.length === 0) {
            // Si pas d'artisans top, récupérer tous les artisans et prendre les 3 premiers
            const allResponse = await fetch(
              "http://localhost:4000/api/artisans"
            );
            const allResult = await allResponse.json();
            if (allResult.success && allResult.data) {
              artisansToShow = allResult.data.slice(0, 3);
            }
          } else {
            // Limiter à 3 artisans maximum
            artisansToShow = artisansToShow.slice(0, 3);
          }

          setArtisans(artisansToShow);
          setError(null);
        } else {
          throw new Error("Format de réponse inattendu");
        }
      } catch (err) {
        console.error("Erreur lors du chargement des artisans:", err);
        setError("Impossible de charger les artisans");
        // En cas d'erreur, utiliser des données de fallback
        setArtisans([
          {
            id_artisan: 1,
            artisan_nom: "Pierre Dubois",
            specialite: "Menuiserie",
            ville: "Lyon",
            note: 5,
          },
          {
            id_artisan: 2,
            artisan_nom: "Marie Lecomte",
            specialite: "Plomberie",
            ville: "Villeurbanne",
            note: 4,
          },
          {
            id_artisan: 3,
            artisan_nom: "Jean Moreau",
            specialite: "Électricité",
            ville: "Caluire",
            note: 4,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, []);

  const renderStars = (note) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className="text-warning">
          {i <= note ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };
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

            {loading ? (
              <div className="text-center">
                <p>Chargement des artisans...</p>
              </div>
            ) : error ? (
              <div className="text-center text-danger">
                <p>{error}</p>
              </div>
            ) : (
              <Row className="justify-content-center">
                {artisans.map((artisan, index) => (
                  <Col
                    md={4}
                    className="mb-4"
                    key={artisan.id_artisan || index}
                  >
                    <div className="card h-100 bg-primary text-white">
                      <div className="card-body text-center">
                        <h5 className="card-title mb-3">
                          {artisan.artisan_nom ||
                            artisan.nom ||
                            "Nom indisponible"}
                        </h5>
                        <div className="mb-2">
                          {renderStars(artisan.note || 5)}
                        </div>
                        <p className="card-text">
                          <strong>Spécialité :</strong>
                          <br />
                          {artisan.specialite || "Non spécifié"}
                        </p>
                        <p className="card-text">
                          <strong>Localisation :</strong>
                          <br />
                          {artisan.ville || "Non spécifié"}
                        </p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
