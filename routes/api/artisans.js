const express = require("express");
const router = express.Router();
const Artisan = require("../../models/Artisan");

// GET /api/artisans - Récupérer tous les artisans
router.get("/", async (req, res) => {
  try {
    const artisans = await Artisan.getAll();
    res.json({
      success: true,
      data: artisans,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des artisans:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur",
    });
  }
});

// GET /api/artisans/top - Récupérer les top artisans
router.get("/top", async (req, res) => {
  try {
    const topArtisans = await Artisan.getTopArtisans();
    res.json({
      success: true,
      data: topArtisans,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des top artisans:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur",
    });
  }
});

// GET /api/artisans/search?q=terme - Rechercher des artisans
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({
        success: false,
        message: "Paramètre de recherche requis",
      });
    }

    const artisans = await Artisan.search(q);
    res.json({
      success: true,
      data: artisans,
    });
  } catch (error) {
    console.error("Erreur lors de la recherche:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur",
    });
  }
});

// GET /api/artisans/category/:categoryId - Récupérer artisans par catégorie
router.get("/category/:categoryId", async (req, res) => {
  try {
    const { categoryId } = req.params;
    const artisans = await Artisan.getByCategory(categoryId);

    res.json({
      success: true,
      data: artisans,
    });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des artisans par catégorie:",
      error
    );
    res.status(500).json({
      success: false,
      message: "Erreur serveur",
    });
  }
});

// GET /api/artisans/:id - Récupérer un artisan par ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const artisan = await Artisan.getById(id);

    if (!artisan) {
      return res.status(404).json({
        success: false,
        message: "Artisan non trouvé",
      });
    }

    res.json({
      success: true,
      data: artisan,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération de l'artisan:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur",
    });
  }
});

// POST /api/artisans - Créer un nouvel artisan
router.post("/", async (req, res) => {
  try {
    const artisanData = req.body;

    // Validation des champs requis
    const requiredFields = [
      "nom",
      "specialite",
      "ville",
      "email",
      "idCategorie",
    ];
    for (const field of requiredFields) {
      if (!artisanData[field]) {
        return res.status(400).json({
          success: false,
          message: `Le champ ${field} est requis`,
        });
      }
    }

    const newArtisanId = await Artisan.create(artisanData);
    res.status(201).json({
      success: true,
      message: "Artisan créé avec succès",
      data: { id: newArtisanId },
    });
  } catch (error) {
    console.error("Erreur lors de la création de l'artisan:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur",
    });
  }
});

module.exports = router;
