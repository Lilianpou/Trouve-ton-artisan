const express = require("express");
const router = express.Router();
const Categorie = require("../../models/Categorie");

// GET /api/categories - Récupérer toutes les catégories
router.get("/", async (req, res) => {
  try {
    const categories = await Categorie.getAll();
    res.json({
      success: true,
      data: categories,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur lors de la récupération des catégories",
    });
  }
});

// GET /api/categories/:id - Récupérer une catégorie par ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const categorie = await Categorie.getById(id);

    if (!categorie) {
      return res.status(404).json({
        success: false,
        message: "Catégorie non trouvée",
      });
    }

    res.json({
      success: true,
      data: categorie,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération de la catégorie:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur",
    });
  }
});

// POST /api/categories - Créer une nouvelle catégorie
router.post("/", async (req, res) => {
  try {
    const { nom_categorie } = req.body;

    if (!nom_categorie) {
      return res.status(400).json({
        success: false,
        message: "Le nom de la catégorie est requis",
      });
    }

    const newCategorieId = await Categorie.create(nom_categorie);
    res.status(201).json({
      success: true,
      message: "Catégorie créée avec succès",
      data: { id: newCategorieId, nom_categorie },
    });
  } catch (error) {
    console.error("Erreur lors de la création de la catégorie:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur",
    });
  }
});

module.exports = router;
