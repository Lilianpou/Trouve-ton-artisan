# 🔨 Trouve ton artisan !

**Plateforme de mise en relation avec les artisans de la région Auvergne-Rhône-Alpes**

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8+-4479A1?style=flat&logo=mysql)](https://www.mysql.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5+-7952B3?style=flat&logo=bootstrap)](https://getbootstrap.com/)

## 📋 Table des matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Utilisation](#-utilisation)
- [API Endpoints](#-api-endpoints)
- [Structure du projet](#-structure-du-projet)
- [SEO et référencement](#-seo-et-référencement)
- [Développement](#-développement)

## 🎯 À propos

**Trouve ton artisan !** est une plateforme web moderne développée pour la région Auvergne-Rhône-Alpes permettant de mettre en relation les particuliers avec des artisans qualifiés dans quatre domaines principaux :

- 🍞 **Alimentation** (Boulangers, Bouchers, Chocolatiers, Traiteurs...)
- 🏗️ **Bâtiment** (Chauffagistes, Électriciens, Menuisiers, Plombiers...)
- ⚒️ **Fabrication** (Bijoutiers, Couturiers, Ferronniers...)
- 🛠️ **Services** (Coiffeurs, Fleuristes, Toiletteurs, Webdesigners...)

## ✨ Fonctionnalités

### 🏠 **Page d'accueil**

- Présentation des étapes pour trouver un artisan
- Affichage des trois artisans du mois (cliquables)
- Navigation intuitive par catégories

### 🔍 **Recherche et filtrage**

- Recherche par nom, spécialité ou ville
- Filtrage par catégorie depuis le header
- Paramètres d'URL pour partage et navigation

### 👷 **Fiches artisans**

- Liste complète avec cartes interactives
- Fiches détaillées individuelles avec :
  - Informations complètes (nom, spécialité, ville, note)
  - Section "À propos"
  - Formulaire de contact fonctionnel
  - Lien vers le site web (si disponible)

### 📱 **Interface moderne**

- Design responsive (mobile, tablette, desktop)
- Effets de survol et animations fluides
- Navigation breadcrumb et liens de retour
- Page 404 personnalisée

### 📧 **Système de contact**

- Formulaire de contact par artisan
- Validation côté client et serveur
- Simulation d'envoi d'emails

### 📄 **Pages légales**

- Mentions légales
- Politique de données personnelles (RGPD)
- Déclaration d'accessibilité
- Politique des cookies

## 🛠️ Technologies

### **Frontend**

- **React 18+** - Interface utilisateur
- **React Router DOM** - Navigation SPA
- **Bootstrap 5** + **React Bootstrap** - Styling et composants
- **React Helmet Async** - Gestion SEO
- **Font Awesome** - Icônes
- **Create React App** - Configuration et build

### **Backend**

- **Node.js** + **Express.js** - API REST
- **MySQL** - Base de données
- **CORS** - Cross-origin requests
- **Morgan** - Logging des requêtes

### **Outils et qualité**

- **Concurrently** - Développement full-stack
- **Nodemon** - Hot reload backend
- **ESLint** - Qualité du code
- **Architecture MVC** - Organisation du code

## 🚀 Installation

### **Prérequis**

- Node.js 18+
- MySQL 8+
- Git

### **1. Cloner le projet**

```bash
git clone https://github.com/Lilianpou/Trouve-ton-artisan.git
cd Trouve-ton-artisan
```

### **2. Installation des dépendances**

```bash
# Backend
npm install

# Frontend
cd frontend
npm install --legacy-peer-deps
cd ..
```

### **3. Configuration de la base de données**

1. **Créer la base de données :**

```sql
CREATE DATABASE trouve_ton_artisan;
```

2. **Importer les données :**

```bash
mysql -u root -p trouve_ton_artisan < mysql/Trouve-ton-artisan.sql
```

3. **Configurer la connexion dans `mysql/connectdata.js` :**

```javascript
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "votre_mot_de_passe",
  database: "trouve_ton_artisan",
  // ... autres options
});
```

## ⚙️ Configuration

### **Variables d'environnement (optionnel)**

Créer un fichier `.env` à la racine :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_NAME=trouve_ton_artisan
NODE_ENV=development
PORT=4000
FRONTEND_URL=http://localhost:3000
```

### **Ports par défaut**

- **Backend API** : `http://localhost:4000`
- **Frontend React** : `http://localhost:3000`

## 🎮 Utilisation

### **Développement complet**

```bash
npm run dev-full
```

Lance simultanément le backend (port 4000) et le frontend (port 3000).

### **Backend uniquement**

```bash
npm run dev
```

### **Frontend uniquement**

```bash
cd frontend
npm start
```

### **Build de production**

```bash
cd frontend
npm run build
```

## 🌐 API Endpoints

### **Artisans**

| Méthode  | Endpoint                               | Description                  |
| -------- | -------------------------------------- | ---------------------------- |
| `GET`    | `/api/artisans`                        | Tous les artisans            |
| `GET`    | `/api/artisans/top`                    | Top artisans (mise en avant) |
| `GET`    | `/api/artisans/:id`                    | Artisan par ID               |
| `GET`    | `/api/artisans/search?q=terme`         | Recherche par terme          |
| `GET`    | `/api/artisans/category/:categoryName` | Par catégorie                |
| `POST`   | `/api/artisans`                        | Créer un artisan             |
| `PUT`    | `/api/artisans/:id`                    | Modifier un artisan          |
| `DELETE` | `/api/artisans/:id`                    | Supprimer un artisan         |

### **Contact**

| Méthode | Endpoint       | Description                   |
| ------- | -------------- | ----------------------------- |
| `POST`  | `/api/contact` | Envoyer un message de contact |

### **Exemples d'usage**

**Récupérer tous les artisans :**

```bash
curl http://localhost:4000/api/artisans
```

**Rechercher par terme :**

```bash
curl "http://localhost:4000/api/artisans/search?q=Lyon"
```

**Artisans par catégorie :**

```bash
curl http://localhost:4000/api/artisans/category/Alimentation
```

**Envoyer un message :**

```bash
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Jean Dupont",
    "email": "jean@example.com",
    "objet": "Demande de devis",
    "message": "Bonjour...",
    "artisan_email": "artisan@example.com",
    "artisan_nom": "Boulangerie Martin"
  }'
```

## 📁 Structure du projet

```
Trouve-ton-artisan/
├── 📁 Backend/                    # Logique serveur
├── 📁 controllers/                # Contrôleurs MVC
│   ├── artisansController.js
│   └── categoriesController.js
├── 📁 models/                     # Modèles de données
│   └── Artisan.js
├── 📁 routes/                     # Routes API
│   └── 📁 api/
│       ├── artisans.js
│       ├── categories.js
│       └── contact.js
├── 📁 mysql/                      # Base de données
│   ├── connectdata.js
│   └── Trouve-ton-artisan.sql
├── 📁 frontend/                   # Application React
│   ├── 📁 public/
│   │   ├── index.html
│   │   ├── sitemap.xml
│   │   └── robots.txt
│   └── 📁 src/
│       ├── 📁 components/         # Composants réutilisables
│       │   ├── Header.js
│       │   ├── Footer.js
│       │   └── SEO.js
│       ├── 📁 pages/              # Pages de l'application
│       │   ├── Home.js
│       │   ├── ArtisansPage.js
│       │   ├── ArtisanDetail.js
│       │   ├── NotFound.js
│       │   ├── PageEnConstruction.js
│       │   └── 📁 legal pages/
│       ├── App.js                 # Application principale
│       └── index.js               # Point d'entrée
├── app.js                         # Configuration Express
├── package.json
└── README.md
```

## 🔍 SEO et référencement

### **Optimisations implémentées**

- ✅ **Titres dynamiques** par page
- ✅ **Meta descriptions** personnalisées
- ✅ **Mots-clés ciblés** par contenu
- ✅ **Open Graph** (Facebook, LinkedIn)
- ✅ **Twitter Cards**
- ✅ **URLs canoniques**
- ✅ **Sitemap XML** structuré
- ✅ **Robots.txt** optimisé
- ✅ **Géolocalisation** Auvergne-Rhône-Alpes

### **Structure des URLs**

- `/` - Page d'accueil
- `/artisans` - Liste complète
- `/artisans?category=Alimentation` - Par catégorie
- `/artisans?search=Lyon` - Recherche
- `/artisans/123` - Fiche individuelle
- `/mentions-legales` - Pages légales

## 👨‍💻 Développement

### **Scripts disponibles**

```bash
npm run dev-full    # Dev complet (backend + frontend)
npm run dev         # Backend uniquement
npm start          # Production backend
npm test           # Tests (à implémenter)
```

### **Structure de données**

**Artisan :**

```javascript
{
  id_artisan: 1,
  artisan_nom: "Boucherie Dumont",
  specialite: "Boucher",
  note: "4.5",
  ville: "Lyon",
  a_propos: "Description de l'artisan...",
  email: "contact@boucherie-dumont.fr",
  site_web: "https://boucherie-dumont.fr",
  categorie: "Alimentation",
  top_artisan: false
}
```

### **Catégories disponibles**

- **Alimentation** : Bouchers, Boulangers, Chocolatiers, Traiteurs
- **Bâtiment** : Chauffagistes, Électriciens, Menuisiers, Plombiers
- **Fabrication** : Bijoutiers, Couturiers, Ferronniers
- **Services** : Coiffeurs, Fleuristes, Toiletteurs, Webdesigners

### **Contribution**

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

---

**© 2025 Région Auvergne-Rhône-Alpes - Trouve ton artisan !**
