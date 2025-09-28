const { pool } = require("../config/database");

class Artisan {
  // Récupérer tous les artisans
  static async getAll() {
    try {
      const [rows] = await pool.execute(`
                SELECT a.*, c.nom_categorie 
                FROM artisan a 
                LEFT JOIN categorie c ON a.id_categorie = c.id_categorie
            `);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  // Récupérer un artisan par ID
  static async getById(id) {
    try {
      const [rows] = await pool.execute(
        `
                SELECT a.*, c.nom_categorie 
                FROM artisan a 
                LEFT JOIN categorie c ON a.id_categorie = c.id_categorie
                WHERE a.id_artisan = ?
            `,
        [id]
      );
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Récupérer les artisans par catégorie
  static async getByCategory(categoryId) {
    try {
      const [rows] = await pool.execute(
        `
                SELECT a.*, c.nom_categorie 
                FROM artisan a 
                LEFT JOIN categorie c ON a.id_categorie = c.id_categorie
                WHERE a.id_categorie = ?
            `,
        [categoryId]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  // Récupérer les top artisans
  static async getTopArtisans() {
    try {
      const [rows] = await pool.execute(`
                SELECT a.*, c.nom_categorie 
                FROM artisan a 
                LEFT JOIN categorie c ON a.id_categorie = c.id_categorie
                WHERE a.top_artisan = true
            `);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  // Créer un nouvel artisan
  static async create(artisanData) {
    try {
      const {
        nom,
        specialite,
        note,
        ville,
        aPropos,
        email,
        siteWeb,
        idCategorie,
        topArtisan,
      } = artisanData;

      const [result] = await pool.execute(
        `
                INSERT INTO artisan 
                (artisan_nom, specialite, note, ville, a_propos, email, site_web, id_categorie, top_artisan)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,
        [
          nom,
          specialite,
          note,
          ville,
          aPropos,
          email,
          siteWeb,
          idCategorie,
          topArtisan || false,
        ]
      );

      return result.insertId;
    } catch (error) {
      throw error;
    }
  }

  // Rechercher des artisans par ville ou spécialité
  static async search(query) {
    try {
      const searchTerm = `%${query}%`;
      const [rows] = await pool.execute(
        `
                SELECT a.*, c.nom_categorie 
                FROM artisan a 
                LEFT JOIN categorie c ON a.id_categorie = c.id_categorie
                WHERE a.ville LIKE ? OR a.specialite LIKE ? OR a.artisan_nom LIKE ?
            `,
        [searchTerm, searchTerm, searchTerm]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Artisan;
