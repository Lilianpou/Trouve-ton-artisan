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
      name: cat,
      description: `Catégorie ${cat}`,
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

// Récupérer une catégorie par ID
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const artisans = await Artisan.getAll();
    const categories = [
      ...new Set(artisans.map((artisan) => artisan.categorie)),
    ];

    if (id > 0 && id <= categories.length) {
      const category = {
        id: parseInt(id),
        name: categories[id - 1],
        description: `Catégorie ${categories[id - 1]}`,
      };
      res.json(category);
    } else {
      res.status(404).json({ error: "Catégorie non trouvée" });
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de la catégorie:", error);
    res.status(500).json({
      error: "Erreur interne du serveur",
      message: "Impossible de récupérer la catégorie",
    });
  }
};

// Créer une nouvelle catégorie (placeholder)
const createCategory = async (req, res) => {
  res.status(501).json({
    error: "Non implémenté",
    message: "La création de catégories n'est pas encore implémentée",
  });
};

// Mettre à jour une catégorie (placeholder)
const updateCategory = async (req, res) => {
  res.status(501).json({
    error: "Non implémenté",
    message: "La mise à jour de catégories n'est pas encore implémentée",
  });
};

// Supprimer une catégorie (placeholder)
const deleteCategory = async (req, res) => {
  res.status(501).json({
    error: "Non implémenté",
    message: "La suppression de catégories n'est pas encore implémentée",
  });
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
