# Trouve ton artisan - API

API pour gérer et rechercher des artisans locaux.

## Technologies

- Node.js + Express
- MySQL
- Architecture MVC

## Installation

1. **Installer les dépendances**

```bash
npm install
```

2. **Configurer MySQL**

- Créer la base de données `trouve-ton-artisan`
- Importer le fichier `mysql/Trouve-ton-artisan.sql`
- Modifier les paramètres dans `mysql/connectdata.js`

3. **Démarrer le serveur**

```bash
npm run dev-full
```

Le serveur démarre sur `http://localhost:3000`

## API Endpoints

### Artisans

- `GET /api/artisans` - Tous les artisans
- `GET /api/artisans/top` - Top artisans
- `GET /api/artisans/search?q=terme` - Recherche
- `GET /api/artisans/category/nomCategorie` - Par catégorie
- `GET /api/artisans/:id` - Un artisan
- `POST /api/artisans` - Créer
- `PUT /api/artisans/:id` - Modifier
- `DELETE /api/artisans/:id` - Supprimer

## Exemples

**Récupérer tous les artisans :**

```
GET http://localhost:3000/api/artisans
```

**Rechercher :**

```
GET http://localhost:3000/api/artisans/search?q=Lyon
```

**Par catégorie :**

```
GET http://localhost:3000/api/artisans/category/Alimentation
```

## Structure des données

```json
{
  "id_artisan": 1,
  "artisan_nom": "Boucherie Dumont",
  "specialite": "Boucher",
  "note": "4.5",
  "ville": "Lyon",
  "email": "contact@example.com",
  "categorie": "Alimentation",
  "top_artisan": false
}
```

## Catégories disponibles

- Alimentation
- Bâtiment
- Fabrication
- Services
