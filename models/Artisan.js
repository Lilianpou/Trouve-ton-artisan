const { pool } = require("../mysql/connectdata");

class Artisan {
  // Récupérer tous les artisans
  static async getAll() {
    try {
      const [rows] = await pool.execute(`
                SELECT *, categorie as nom_categorie 
                FROM artisan
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
                SELECT *, categorie as nom_categorie 
                FROM artisan
                WHERE id_artisan = ?
            `,
        [id]
      );
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Récupérer les artisans par catégorie
  static async getByCategory(categoryName) {
    try {
      const [rows] = await pool.execute(
        `
                SELECT *, categorie as nom_categorie 
                FROM artisan
                WHERE categorie = ?
            `,
        [categoryName]
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
                SELECT *, categorie as nom_categorie 
                FROM artisan
                WHERE top_artisan = true
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
        categorie,
        topArtisan,
      } = artisanData;

      const [result] = await pool.execute(
        `
                INSERT INTO artisan 
                (artisan_nom, specialite, note, ville, a_propos, email, site_web, categorie, top_artisan)
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
          categorie,
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
                SELECT *, categorie as nom_categorie 
                FROM artisan
                WHERE ville LIKE ? OR specialite LIKE ? OR artisan_nom LIKE ? OR categorie LIKE ?
            `,
        [searchTerm, searchTerm, searchTerm, searchTerm]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }

  // Mettre à jour un artisan
  static async update(id, updateData) {
    try {
      const fields = [];
      const values = [];

      // Construction dynamique de la requête UPDATE
      for (const [key, value] of Object.entries(updateData)) {
        if (value !== undefined && value !== null) {
          switch (key) {
            case "nom":
              fields.push("artisan_nom = ?");
              values.push(value);
              break;
            case "specialite":
              fields.push("specialite = ?");
              values.push(value);
              break;
            case "note":
              fields.push("note = ?");
              values.push(value);
              break;
            case "ville":
              fields.push("ville = ?");
              values.push(value);
              break;
            case "aPropos":
              fields.push("a_propos = ?");
              values.push(value);
              break;
            case "email":
              fields.push("email = ?");
              values.push(value);
              break;
            case "siteWeb":
              fields.push("site_web = ?");
              values.push(value);
              break;
            case "categorie":
              fields.push("categorie = ?");
              values.push(value);
              break;
            case "topArtisan":
              fields.push("top_artisan = ?");
              values.push(value);
              break;
          }
        }
      }

      if (fields.length === 0) {
        throw new Error("Aucun champ à mettre à jour");
      }

      values.push(id);

      const [result] = await pool.execute(
        `UPDATE artisan SET ${fields.join(", ")} WHERE id_artisan = ?`,
        values
      );

      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }

  // Supprimer un artisan
  static async delete(id) {
    try {
      const [result] = await pool.execute(
        "DELETE FROM artisan WHERE id_artisan = ?",
        [id]
      );
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Artisan;
