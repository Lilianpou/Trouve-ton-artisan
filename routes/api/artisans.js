const express = require("express");
const router = express.Router();
const ArtisansController = require("../../controllers/artisansController");

// GET /api/artisans - Récupérer tous les artisans
router.get("/", ArtisansController.getAllArtisans);

// GET /api/artisans/top - Récupérer les top artisans
router.get("/top", ArtisansController.getTopArtisans);

// GET /api/artisans/search?q=terme - Rechercher des artisans
router.get("/search", ArtisansController.searchArtisans);

// GET /api/artisans/category/:categoryName - Récupérer artisans par catégorie
router.get("/category/:categoryName", ArtisansController.getArtisansByCategory);

// GET /api/artisans/:id - Récupérer un artisan par ID
router.get("/:id", ArtisansController.getArtisanById);

// POST /api/artisans - Créer un nouvel artisan
router.post("/", ArtisansController.createArtisan);

// PUT /api/artisans/:id - Mettre à jour un artisan
router.put("/:id", ArtisansController.updateArtisan);

// DELETE /api/artisans/:id - Supprimer un artisan
router.delete("/:id", ArtisansController.deleteArtisan);

module.exports = router;
