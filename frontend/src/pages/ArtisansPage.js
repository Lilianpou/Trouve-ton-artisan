import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Spinner,
} from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { artisansService, categoriesService } from "../services/api";

function ArtisansPage() {
  const [artisans, setArtisans] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || ""
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoriesService.getAllCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des catégories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchArtisans = async () => {
      setLoading(true);
      try {
        let response = await artisansService.getAllArtisans();
        let filteredArtisans = response.data;

        // Filtrer par catégorie si sélectionnée
        if (selectedCategory) {
          filteredArtisans = filteredArtisans.filter(
            (artisan) =>
              artisan.categorie ===
              categories.find((cat) => cat.id === parseInt(selectedCategory))
                ?.name
          );
        }

        // Filtrer par recherche si un terme est fourni
        const searchTerm = searchParams.get("search");
        if (searchTerm) {
          filteredArtisans = filteredArtisans.filter((artisan) =>
            (artisan.nom || artisan.name || "")
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          );
        }

        setArtisans(filteredArtisans);
      } catch (error) {
        console.error("Erreur lors du chargement des artisans:", error);
        setArtisans([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, [selectedCategory, searchParams, categories]);

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);

    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1>Nos Artisans</h1>
          <p className="lead">Découvrez tous nos artisans qualifiés</p>
          {searchParams.get("search") && (
            <div className="alert alert-info">
              <strong>Résultats de recherche pour :</strong> "
              {searchParams.get("search")}"
            </div>
          )}
        </Col>
      </Row>

      {/* Filtres */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Filtrer par catégorie :</Form.Label>
            <Form.Select
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Toutes les catégories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Liste des artisans */}
      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Chargement...</span>
          </Spinner>
        </div>
      ) : artisans.length === 0 ? (
        <div className="text-center py-5">
          <h3>Aucun artisan trouvé</h3>
          <p>Essayez de modifier vos critères de recherche.</p>
        </div>
      ) : (
        <Row>
          {artisans.map((artisan) => (
            <Col md={6} lg={4} className="mb-4" key={artisan.id}>
              <Card className="h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{artisan.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {artisan.specialty}
                  </Card.Subtitle>
                  <Card.Text className="flex-grow-1">
                    <strong>Localisation :</strong> {artisan.location}
                    <br />
                    <strong>Note :</strong>{" "}
                    {artisan.rating ? `${artisan.rating}/5` : "Non évalué"}
                    <br />
                    {artisan.description && (
                      <>
                        <strong>Description :</strong>{" "}
                        {artisan.description.substring(0, 100)}
                        {artisan.description.length > 100 && "..."}
                      </>
                    )}
                  </Card.Text>
                  <div className="mt-auto">
                    <Link to={`/artisans/${artisan.id}`}>
                      <Button variant="primary" className="w-100">
                        Voir le profil
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default ArtisansPage;
