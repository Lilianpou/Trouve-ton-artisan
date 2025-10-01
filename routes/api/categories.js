const express = require("express");
const categoriesController = require("../../controllers/categoriesController");
const router = express.Router();

// GET /api/categories - Récupérer toutes les catégories
router.get("/", categoriesController.getAllCategories);

// GET /api/categories/:id - Récupérer une catégorie par ID
router.get("/:id", categoriesController.getCategoryById);

// POST /api/categories - Créer une nouvelle catégorie
router.post("/", categoriesController.createCategory);

// PUT /api/categories/:id - Mettre à jour une catégorie
router.put("/:id", categoriesController.updateCategory);

// DELETE /api/categories/:id - Supprimer une catégorie
router.delete("/:id", categoriesController.deleteCategory);

module.exports = router;
