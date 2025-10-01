import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";

function ArtisansPage() {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [filteredArtisans, setFilteredArtisans] = useState([]);

  // Fonction pour afficher les étoiles selon la note
  const renderStars = (note) => {
    const stars = [];
    const rating = parseFloat(note) || 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="text-warning">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-muted">
            ☆
          </span>
        );
      }
    }
    return stars;
  };

  useEffect(() => {
    const fetchArtisans = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:4000/api/artisans");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des artisans");
        }
        const data = await response.json();
        const artisansData = data.data || data;
        setArtisans(artisansData);
        setFilteredArtisans(artisansData);
      } catch (error) {
        console.error("Erreur lors du chargement des artisans:", error);
        setArtisans([]);
        setFilteredArtisans([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, []);

  useEffect(() => {
    // Filtrer les artisans selon les paramètres de recherche
    let filtered = [...artisans];

    // Filtrer par terme de recherche
    const searchTerm = searchParams.get("search");
    if (searchTerm) {
      filtered = filtered.filter(
        (artisan) =>
          artisan.artisan_nom
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          artisan.specialite.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artisan.ville.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrer par catégorie - utiliser la colonne 'categorie' de la base de données
    const category = searchParams.get("category");
    if (category) {
      filtered = filtered.filter(
        (artisan) =>
          artisan.categorie &&
          artisan.categorie.toLowerCase() === category.toLowerCase()
      );
    }

    setFilteredArtisans(filtered);

    // Debugging: afficher les résultats du filtrage
    console.log("Paramètre category:", category);
    console.log("Artisans filtrés:", filtered);
    console.log("Tous les artisans:", artisans);
  }, [artisans, searchParams]);

  const getPageTitle = () => {
    const searchTerm = searchParams.get("search");
    const category = searchParams.get("category");

    if (searchTerm) {
      return `Résultats de recherche pour "${searchTerm}"`;
    } else if (category) {
      return `Artisans - ${category}`;
    } else {
      return "Tous nos artisans";
    }
  };

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="text-primary">{getPageTitle()}</h1>
          <p className="text-muted">
            {filteredArtisans.length} artisan
            {filteredArtisans.length > 1 ? "s" : ""} trouvé
            {filteredArtisans.length > 1 ? "s" : ""}
          </p>
        </Col>
      </Row>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" role="status" className="text-primary">
            <span className="visually-hidden">Chargement...</span>
          </Spinner>
          <p className="mt-2">Chargement des artisans...</p>
        </div>
      ) : filteredArtisans.length === 0 ? (
        <div className="text-center py-5">
          <h3 className="text-muted">Aucun artisan trouvé</h3>
          <p>Essayez de modifier vos critères de recherche.</p>
          <Link to="/" className="btn btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      ) : (
        <Row>
          {filteredArtisans.map((artisan) => (
            <Col md={6} lg={4} className="mb-4" key={artisan.id_artisan}>
              <Card
                className="h-100 shadow-sm border-0"
                style={{ cursor: "pointer", transition: "transform 0.2s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Link
                  to={`/artisans/${artisan.id_artisan}`}
                  className="text-decoration-none text-dark"
                >
                  <Card.Body className="d-flex flex-column p-4">
                    {/* Nom de l'artisan */}
                    <Card.Title className="text-primary mb-3 h5">
                      {artisan.artisan_nom}
                    </Card.Title>

                    {/* Note avec étoiles */}
                    <div className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="me-2">{renderStars(artisan.note)}</div>
                        <span className="text-muted small">
                          ({artisan.note}/5)
                        </span>
                      </div>
                    </div>

                    {/* Spécialité */}
                    <Card.Text className="mb-2">
                      <strong className="text-secondary">Spécialité :</strong>
                      <br />
                      <span className="badge bg-light text-dark border">
                        {artisan.specialite}
                      </span>
                    </Card.Text>

                    {/* Localisation */}
                    <Card.Text className="mb-0 mt-auto">
                      <strong className="text-secondary">Localisation :</strong>
                      <br />
                      <span className="text-muted">📍 {artisan.ville}</span>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default ArtisansPage;
