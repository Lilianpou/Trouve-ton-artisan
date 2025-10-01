# Guide de déploiement - Trouve ton Artisan

## 🚀 Déploiement sur Vercel (Frontend) + Railway (Backend)

### Étape 1 : Préparation du code

1. **Créer un dossier séparé pour le backend** :

```bash
mkdir backend
# Déplacer tous les fichiers backend dans ce dossier :
# - app.js, controllers/, routes/, models/, mysql/, bin/
```

2. **Créer le package.json pour le backend** :

```bash
cd backend
# Copier le contenu de backend-package.json dans package.json
```

### Étape 2 : Déploiement du Backend sur Railway

1. **Créer un compte sur Railway** : https://railway.app/
2. **Créer un nouveau projet** et connecter votre repository GitHub
3. **Créer une base de données MySQL** :

   - Cliquer sur "New" → "Database" → "MySQL"
   - Noter les informations de connexion

4. **Déployer l'API** :

   - Cliquer sur "New" → "GitHub Repo"
   - Sélectionner votre repository
   - Configurer le service :
     - Root Directory: `/backend`
     - Build Command: `npm install`
     - Start Command: `npm start`

5. **Configurer les variables d'environnement** dans Railway :

   ```
   DB_HOST=votre-mysql-host.railway.app
   DB_PORT=3306
   DB_USER=votre-username
   DB_PASSWORD=votre-password
   DB_NAME=Trouve_ton_artisan
   PORT=4000
   FRONTEND_URL=https://votre-app.vercel.app
   ```

6. **Importer la base de données** :
   - Utiliser Railway CLI ou phpMyAdmin
   - Importer le fichier `mysql/Trouve-ton-artisan.sql`

### Étape 3 : Déploiement du Frontend sur Vercel

1. **Créer un compte sur Vercel** : https://vercel.com/
2. **Connecter votre repository GitHub**
3. **Configurer le projet** :

   - Framework Preset: "Create React App"
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`

4. **Configurer les variables d'environnement** dans Vercel :

   ```
   REACT_APP_API_URL=https://votre-backend.railway.app
   GENERATE_SOURCEMAP=false
   ```

5. **Déployer** : Vercel déploiera automatiquement à chaque push

### Étape 4 : Configuration finale

1. **Mettre à jour l'URL du backend** dans le frontend :

   - Modifier `.env.production` avec l'URL Railway

2. **Configurer CORS** dans le backend :

   - Ajouter l'URL Vercel dans les origines autorisées

3. **Tester le déploiement** :
   - Vérifier que l'API fonctionne
   - Tester toutes les fonctionnalités

## 💡 Conseils

- **Gratuit** : Railway offre 500h/mois, Vercel est gratuit pour les projets personnels
- **Domaine personnalisé** : Configurable dans Vercel
- **Logs** : Surveillez les logs Railway pour déboguer
- **Redéploiement** : Automatique à chaque push sur la branche main

## 🔧 Dépannage

### Erreurs communes :

- **CORS** : Vérifier les URLs dans la configuration
- **Base de données** : Vérifier les variables d'environnement
- **Build** : Vérifier les chemins et dépendances

### Commands utiles :

```bash
# Tester localement
npm run build
npm start

# Logs Railway
railway logs

# Variables Vercel
vercel env list
```
