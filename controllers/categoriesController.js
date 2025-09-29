const Artisan = require("../models/Artisan");

// Récupérer toutes les catégories (uniques) depuis la table artisan
const getAllCategories = async (req, res) => {
  try {
    const artisans = await Artisan.getAll();
    // Extraire les catégories uniques
    const categories = [
      ...new Set(artisans.map((artisan) => artisan.categorie)),
    ];
    const categoriesFormatted = categories.map((cat, index) => ({
      id: index + 1,
      nom: cat,
    }));
    res.json(categoriesFormatted);
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
    res.status(500).json({
      error: "Erreur interne du serveur",
      message: "Impossible de récupérer les catégories",
    });
  }
};

module.exports = {
  getAllCategories,
};
