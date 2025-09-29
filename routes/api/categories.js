const express = require("express");
const categoriesController = require("../../controllers/categoriesController");
const router = express.Router();

// GET /api/categories - Récupérer toutes les catégoriesconst categoriesController = require('../../controllers/categoriesController');const router = express.Router();

router.get("/", categoriesController.getAllCategories);

module.exports = router;
// GET /api/categories - Récupérer toutes les catégoriesconst categoriesController = require("../../controllers/categoriesController");

router.get("/", categoriesController.getAllCategories);

// GET /api/categories - Récupérer toutes les catégories// GET /api/categories - Récupérer toutes les catégories

module.exports = router;
router.get("/", categoriesController.getAllCategories);

module.exports = router; // GET /api/categories/:id - Récupérer une catégorie par ID
router.get("/:id", CategoriesController.getCategoryById);

// POST /api/categories - Créer une nouvelle catégorie
router.post("/", CategoriesController.createCategory);

// PUT /api/categories/:id - Mettre à jour une catégorie
router.put("/:id", CategoriesController.updateCategory);

// DELETE /api/categories/:id - Supprimer une catégorie
router.delete("/:id", CategoriesController.deleteCategory);

module.exports = router;
