import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Services pour les artisans
export const artisansService = {
  // Récupérer tous les artisans
  getAllArtisans: () => api.get("/artisans"),

  // Récupérer un artisan par ID
  getArtisanById: (id) => api.get(`/artisans/${id}`),

  // Récupérer les artisans par catégorie
  getArtisansByCategory: (categoryId) =>
    api.get(`/artisans?category=${categoryId}`),

  // Créer un nouvel artisan
  createArtisan: (artisanData) => api.post("/artisans", artisanData),

  // Mettre à jour un artisan
  updateArtisan: (id, artisanData) => api.put(`/artisans/${id}`, artisanData),

  // Supprimer un artisan
  deleteArtisan: (id) => api.delete(`/artisans/${id}`),
};

// Services pour les catégories
export const categoriesService = {
  // Récupérer toutes les catégories
  getAllCategories: () => api.get("/categories"),

  // Récupérer une catégorie par ID
  getCategoryById: (id) => api.get(`/categories/${id}`),

  // Créer une nouvelle catégorie
  createCategory: (categoryData) => api.post("/categories", categoryData),

  // Mettre à jour une catégorie
  updateCategory: (id, categoryData) =>
    api.put(`/categories/${id}`, categoryData),

  // Supprimer une catégorie
  deleteCategory: (id) => api.delete(`/categories/${id}`),
};

export default api;
