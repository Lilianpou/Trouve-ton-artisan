import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../components/SEO";

function PageEnConstruction({ title }) {
  const getSEODescription = (pageTitle) => {
    const descriptions = {
      "Mentions légales":
        "Consultez les mentions légales du site Trouve ton artisan ! - Région Auvergne-Rhône-Alpes. Informations sur l'éditeur, hébergeur et conditions d'utilisation.",
      "Données personnelles":
        "Politique de protection des données personnelles de Trouve ton artisan ! Découvrez comment nous protégeons vos informations personnelles selon le RGPD.",
      Accessibilité:
        "Déclaration d'accessibilité du site Trouve ton artisan ! Notre engagement pour rendre le site accessible à tous les utilisateurs.",
      Cookies:
        "Politique des cookies de Trouve ton artisan ! Informations sur l'utilisation des cookies et vos choix de confidentialité.",
    };
    return (
      descriptions[pageTitle] ||
      `${pageTitle} - Page en construction sur Trouve ton artisan !`
    );
  };

  return (
    <Container className="py-5">
      <SEO
        title={title}
        description={getSEODescription(title)}
        keywords={`${title.toLowerCase()}, Trouve ton artisan, Auvergne-Rhône-Alpes, mentions légales, RGPD, accessibilité`}
        url={`https://trouve-ton-artisan.fr/${title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/é/g, "e")}`}
      />
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
