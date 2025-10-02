import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";

function ArtisanDetail() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [contactForm, setContactForm] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
  });
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  // Fonction pour afficher les étoiles selon la note
  const renderStars = (note) => {
    const stars = [];
    const rating = parseFloat(note) || 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="text-warning fs-4">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-muted fs-4">
            ☆
          </span>
        );
      }
    }
    return stars;
  };

  useEffect(() => {
    const fetchArtisan = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://trouve-ton-artisan-cbsg.onrender.com/api/artisans/${id}`
        );
        if (!response.ok) {
          throw new Error("Artisan non trouvé");
        }
        const data = await response.json();
        setArtisan(data.data || data);
      } catch (error) {
        console.error("Erreur lors du chargement de l'artisan:", error);
        setError("Artisan non trouvé");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArtisan();
    }
  }, [id]);

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSendingEmail(true);

    try {
      // Simuler l'envoi d'email (vous devrez implémenter cela côté backend)
      const response = await fetch(
        `https://trouve-ton-artisan-cbsg.onrender.com/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...contactForm,
            artisan_email: artisan.email,
            artisan_nom: artisan.artisan_nom,
          }),
        }
      );

      if (response.ok) {
        setEmailSent(true);
        setContactForm({
          nom: "",
          email: "",
          objet: "",
          message: "",
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setSendingEmail(false);
    }
  };

  if (loading) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <Spinner animation="border" role="status" className="text-primary">
            <span className="visually-hidden">Chargement...</span>
          </Spinner>
          <p className="mt-2">Chargement de la fiche artisan...</p>
        </div>
      </Container>
    );
  }

  if (error || !artisan) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2 className="text-danger">Artisan non trouvé</h2>
          <p>L'artisan que vous recherchez n'existe pas ou a été supprimé.</p>
          <Link to="/artisans" className="btn btn-primary">
            Retour à la liste des artisans
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <SEO
        title={`${artisan.artisan_nom} - ${artisan.specialite}`}
        description={`Découvrez ${artisan.artisan_nom}, ${
          artisan.specialite
        } à ${artisan.ville}. Note: ${
          artisan.note
        }/5. ${artisan.a_propos.substring(0, 120)}...`}
        keywords={`${artisan.artisan_nom}, ${artisan.specialite}, ${artisan.ville}, artisan, ${artisan.categorie}, Auvergne-Rhône-Alpes`}
        url={`https://trouve-ton-artisan.fr/artisans/${artisan.id_artisan}`}
        type="profile"
      />
      {/* En-tête avec informations principales */}
      <Row className="mb-4">
        <Col lg={8}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="p-4">
              <Row>
                {/* Image de l'artisan */}
                <Col md={4} className="text-center mb-3">
                  <div
                    className="bg-light rounded p-4 mb-3"
                    style={{ minHeight: "200px" }}
                  >
                    <div className="text-muted">
                      <i className="fas fa-user fa-4x"></i>
                      <p className="mt-2 mb-0">Image</p>
                    </div>
                  </div>
                </Col>

                {/* Informations principales */}
                <Col md={8}>
                  <div className="mb-3">
                    <h1 className="text-primary mb-2">{artisan.artisan_nom}</h1>
                    <div className="mb-2">
                      {renderStars(artisan.note)}
                      <span className="text-muted ms-2">
                        ({artisan.note}/5)
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h5 className="text-secondary">Spécialité</h5>
                    <span className="badge bg-primary fs-6 px-3 py-2">
                      {artisan.specialite}
                    </span>
                  </div>

                  <div className="mb-3">
                    <h5 className="text-secondary">Localisation</h5>
                    <p className="mb-0">
                      <i className="fas fa-map-marker-alt text-danger me-2"></i>
                      {artisan.ville}
                    </p>
                  </div>

                  {artisan.site_web && (
                    <div>
                      <h5 className="text-secondary">Site web</h5>
                      <a
                        href={artisan.site_web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        <i className="fas fa-external-link-alt me-2"></i>
                        Visiter le site
                      </a>
                    </div>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Formulaire de contact */}
        <Col lg={4}>
          <Card className="shadow-sm border-primary">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">
                <i className="fas fa-envelope me-2"></i>
                Formulaire
              </h5>
            </Card.Header>
            <Card.Body>
              {emailSent ? (
                <Alert variant="success">
                  <i className="fas fa-check-circle me-2"></i>
                  Message envoyé avec succès !
                </Alert>
              ) : (
                <Form onSubmit={handleContactSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      type="text"
                      name="nom"
                      value={contactForm.nom}
                      onChange={handleContactFormChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactFormChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Objet</Form.Label>
                    <Form.Control
                      type="text"
                      name="objet"
                      value={contactForm.objet}
                      onChange={handleContactFormChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactFormChange}
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100"
                    disabled={sendingEmail}
                  >
                    {sendingEmail ? (
                      <>
                        <Spinner
                          animation="border"
                          size="sm"
                          className="me-2"
                        />
                        Envoi...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Envoyer
                      </>
                    )}
                  </Button>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section À propos */}
      <Row>
        <Col lg={8}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <h3 className="text-primary mb-3">À propos</h3>
              <p className="text-muted" style={{ lineHeight: "1.6" }}>
                {artisan.a_propos}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Bouton retour */}
      <Row className="mt-4">
        <Col>
          <Link to="/artisans" className="btn btn-outline-secondary">
            <i className="fas fa-arrow-left me-2"></i>
            Retour à la liste des artisans
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ArtisanDetail;
