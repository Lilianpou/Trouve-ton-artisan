const express = require("express");
const router = express.Router();

// POST /api/contact - Envoyer un message de contact
router.post("/", async (req, res) => {
  try {
    const { nom, email, objet, message, artisan_email, artisan_nom } = req.body;

    // Validation des champs requis
    if (!nom || !email || !objet || !message || !artisan_email) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs sont requis",
      });
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !emailRegex.test(artisan_email)) {
      return res.status(400).json({
        success: false,
        message: "Format d'email invalide",
      });
    }

    // Ici, vous pourriez intégrer un service d'envoi d'email comme SendGrid, Nodemailer, etc.
    // Pour l'instant, on simule l'envoi avec un log
    console.log("=== MESSAGE DE CONTACT ===");
    console.log(`De: ${nom} (${email})`);
    console.log(`Pour: ${artisan_nom} (${artisan_email})`);
    console.log(`Objet: ${objet}`);
    console.log(`Message: ${message}`);
    console.log("========================");

    // Simulation d'un délai d'envoi
    await new Promise((resolve) => setTimeout(resolve, 1000));

    res.json({
      success: true,
      message: "Message envoyé avec succès",
      data: {
        nom,
        email,
        objet,
        artisan_nom,
      },
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur lors de l'envoi du message",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

module.exports = router;
