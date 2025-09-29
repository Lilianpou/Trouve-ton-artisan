const Artisan = require("../models/Artisan");

// Contrôleur pour les artisans
class ArtisansController {
  // Récupérer tous les artisans
  static async getAllArtisans(req, res) {
    try {
      const artisans = await Artisan.getAll();
      res.json({
        success: true,
        data: artisans,
        count: artisans.length,
        message: "Artisans récupérés avec succès",
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des artisans:", error);
      res.status(500).json({
        success: false,
        message: "Erreur serveur lors de la récupération des artisans",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  }

  // Récupérer les top artisans
  static async getTopArtisans(req, res) {
    try {
      const topArtisans = await Artisan.getTopArtisans();
      res.json({
        success: true,
        data: topArtisans,
        count: topArtisans.length,
        message: "Top artisans récupérés avec succès",
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des top artisans:", error);
      res.status(500).json({
        success: false,
        message: "Erreur serveur lors de la récupération des top artisans",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  }

  // Rechercher des artisans
  static async searchArtisans(req, res) {
    try {
      const { q } = req.query;

      // Validation du paramètre de recherche
      if (!q || q.trim() === "") {
        return res.status(400).json({
          success: false,
          message: "Paramètre de recherche requis et ne peut pas être vide",
        });
      }

      // Validation de la longueur minimum
      if (q.trim().length < 2) {
        return res.status(400).json({
          success: false,
          message: "Le terme de recherche doit contenir au moins 2 caractères",
        });
      }

      const artisans = await Artisan.search(q.trim());
      res.json({
        success: true,
        data: artisans,
        count: artisans.length,
        query: q.trim(),
        message: `${artisans.length} artisan(s) trouvé(s) pour "${q.trim()}"`,
      });
    } catch (error) {
      console.error("Erreur lors de la recherche:", error);
      res.status(500).json({
        success: false,
        message: "Erreur serveur lors de la recherche",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  }

  // Récupérer artisans par catégorie
  static async getArtisansByCategory(req, res) {
    try {
      const { categoryName } = req.params;

      // Validation du nom de catégorie
      if (!categoryName || categoryName.trim() === "") {
        return res.status(400).json({
          success: false,
          message: "Nom de catégorie requis",
        });
      }

      const artisans = await Artisan.getByCategory(categoryName);

      res.json({
        success: true,
        data: artisans,
        count: artisans.length,
        categoryName: categoryName,
        message: `${artisans.length} artisan(s) trouvé(s) dans la catégorie "${categoryName}"`,
      });
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des artisans par catégorie:",
        error
      );
      res.status(500).json({
        success: false,
        message:
          "Erreur serveur lors de la récupération des artisans par catégorie",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  }

  // Récupérer un artisan par ID
  static async getArtisanById(req, res) {
    try {
      const { id } = req.params;

      // Validation de l'ID
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "ID d'artisan invalide",
        });
      }

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
        message: "Artisan récupéré avec succès",
      });
    } catch (error) {
      console.error("Erreur lors de la récupération de l'artisan:", error);
      res.status(500).json({
        success: false,
        message: "Erreur serveur lors de la récupération de l'artisan",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  }

  // Créer un nouvel artisan
  static async createArtisan(req, res) {
    try {
      const artisanData = req.body;

      // Validation des champs requis
      const requiredFields = [
        "nom",
        "specialite",
        "ville",
        "email",
        "categorie",
      ];
      const missingFields = [];

      for (const field of requiredFields) {
        if (
          !artisanData[field] ||
          (typeof artisanData[field] === "string" &&
            artisanData[field].trim() === "")
        ) {
          missingFields.push(field);
        }
      }

      if (missingFields.length > 0) {
        return res.status(400).json({
          success: false,
          message: `Les champs suivants sont requis: ${missingFields.join(
            ", "
          )}`,
        });
      }

      // Validation de l'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(artisanData.email)) {
        return res.status(400).json({
          success: false,
          message: "Format d'email invalide",
        });
      }

      // Validation de la note (si fournie)
      if (
        artisanData.note &&
        (isNaN(artisanData.note) ||
          artisanData.note < 0 ||
          artisanData.note > 5)
      ) {
        return res.status(400).json({
          success: false,
          message: "La note doit être un nombre entre 0 et 5",
        });
      }

      // Validation de la catégorie
      if (!artisanData.categorie || artisanData.categorie.trim() === "") {
        return res.status(400).json({
          success: false,
          message: "Nom de catégorie requis",
        });
      }

      const newArtisanId = await Artisan.create(artisanData);

      res.status(201).json({
        success: true,
        message: "Artisan créé avec succès",
        data: {
          id: newArtisanId,
          nom: artisanData.nom,
        },
      });
    } catch (error) {
      console.error("Erreur lors de la création de l'artisan:", error);

      // Gestion des erreurs de duplication d'email
      if (error.code === "ER_DUP_ENTRY") {
        return res.status(409).json({
          success: false,
          message: "Un artisan avec cet email existe déjà",
        });
      }

      // Gestion des erreurs de clé étrangère
      if (error.code === "ER_NO_REFERENCED_ROW_2") {
        return res.status(400).json({
          success: false,
          message: "Catégorie spécifiée inexistante",
        });
      }

      res.status(500).json({
        success: false,
        message: "Erreur serveur lors de la création de l'artisan",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  }

  // Mettre à jour un artisan
  static async updateArtisan(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      // Validation de l'ID
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "ID d'artisan invalide",
        });
      }

      // Vérifier si l'artisan existe
      const existingArtisan = await Artisan.getById(id);
      if (!existingArtisan) {
        return res.status(404).json({
          success: false,
          message: "Artisan non trouvé",
        });
      }

      // Validation de l'email si fourni
      if (updateData.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(updateData.email)) {
          return res.status(400).json({
            success: false,
            message: "Format d'email invalide",
          });
        }
      }

      // Validation de la note si fournie
      if (
        updateData.note &&
        (isNaN(updateData.note) || updateData.note < 0 || updateData.note > 5)
      ) {
        return res.status(400).json({
          success: false,
          message: "La note doit être un nombre entre 0 et 5",
        });
      }

      await Artisan.update(id, updateData);

      res.json({
        success: true,
        message: "Artisan mis à jour avec succès",
        data: { id: parseInt(id) },
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'artisan:", error);
      res.status(500).json({
        success: false,
        message: "Erreur serveur lors de la mise à jour",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  }

  // Supprimer un artisan
  static async deleteArtisan(req, res) {
    try {
      const { id } = req.params;

      // Validation de l'ID
      if (!id || isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "ID d'artisan invalide",
        });
      }

      // Vérifier si l'artisan existe
      const existingArtisan = await Artisan.getById(id);
      if (!existingArtisan) {
        return res.status(404).json({
          success: false,
          message: "Artisan non trouvé",
        });
      }

      await Artisan.delete(id);

      res.json({
        success: true,
        message: "Artisan supprimé avec succès",
      });
    } catch (error) {
      console.error("Erreur lors de la suppression de l'artisan:", error);
      res.status(500).json({
        success: false,
        message: "Erreur serveur lors de la suppression",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  }
}

module.exports = ArtisansController;
