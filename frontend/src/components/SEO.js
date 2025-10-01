import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  type = "website",
  image,
  url,
}) => {
  const siteTitle = "Trouve ton artisan !";
  const siteDescription =
    "Plateforme de mise en relation avec les artisans de la région Auvergne-Rhône-Alpes";
  const siteUrl = "https://trouve-ton-artisan.fr";

  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || siteDescription;
  const metaImage = image || `${siteUrl}/logo.png`;
  const metaUrl = url || siteUrl;

  return (
    <Helmet>
      {/* Titre de la page */}
      <title>{fullTitle}</title>

      {/* Meta tags basiques */}
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Région Auvergne-Rhône-Alpes" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Balises supplémentaires pour le SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="fr" />
      <meta name="geo.region" content="FR-ARA" />
      <meta name="geo.placename" content="Auvergne-Rhône-Alpes" />

      {/* Canonical URL */}
      <link rel="canonical" href={metaUrl} />
    </Helmet>
  );
};

export default SEO;
