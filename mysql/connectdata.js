const mysql = require("mysql2");

// Configuration de la base de données
const dbConfig = {
  host: "localhost",
  port: 3306, // Port MySQL par défaut
  user: "root", // Remplacez par votre nom d'utilisateur MySQL
  password: "", // Remplacez par votre mot de passe MySQL
  database: "trouve-ton-artisan",
};

// Création du pool de connexions
const pool = mysql.createPool(dbConfig);

// Promisify pour utiliser async/await
const promisePool = pool.promise();

// Test de connexion
const testConnection = async () => {
  try {
    const connection = await promisePool.getConnection();
    console.log("✅ Connexion à la base de données réussie");
    connection.release();
  } catch (error) {
    console.error(
      "❌ Erreur de connexion à la base de données:",
      error.message
    );
  }
};

// Tester la connexion au démarrage
testConnection();

module.exports = {
  pool: promisePool,
  testConnection,
};
