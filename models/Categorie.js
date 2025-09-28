const { pool } = require("../config/database");

class Categorie {
  // Récupérer toutes les catégories
  static async getAll() {
    try {
      const [rows] = await pool.execute("SELECT * FROM categorie");
      return rows;
    } catch (error) {
      throw error;
    }
  }

  // Récupérer une catégorie par ID
  static async getById(id) {
    try {
      const [rows] = await pool.execute(
        "SELECT * FROM categorie WHERE id_categorie = ?",
        [id]
      );
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Créer une nouvelle catégorie
  static async create(nomCategorie) {
    try {
      const [result] = await pool.execute(
        "INSERT INTO categorie (nom_categorie) VALUES (?)",
        [nomCategorie]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Categorie;
