-- ========================================
-- Base de données: Trouve ton artisan
-- Date de création: 28 septembre 2025
-- ========================================

-- Création de la base de données
CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Utilisation de la base de données
USE trouve_ton_artisan;

-- Table des catégories
CREATE TABLE categorie (
    id_categorie INT NOT NULL AUTO_INCREMENT,
    nom_categorie VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_categorie)
) ENGINE = InnoDB;

-- Insertion des données dans la table catégorie
INSERT INTO categorie (nom_categorie) VALUES 
('Alimentation'), 
('Bâtiment'), 
('Fabrication'), 
('Services');

-- Table des artisans
CREATE TABLE artisan (
    id_artisan INT NOT NULL AUTO_INCREMENT,
    artisan_nom VARCHAR(50) NOT NULL,
    specialite VARCHAR(50) NOT NULL,
    note DECIMAL(2,1) NOT NULL DEFAULT 0.0,
    ville VARCHAR(50) NOT NULL,
    a_propos TEXT NOT NULL,
    email VARCHAR(150) NOT NULL,
    site_web VARCHAR(150) NULL,
    id_categorie INT NOT NULL,
    top_artisan BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id_artisan),
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie),
    UNIQUE KEY unique_email (email)
) ENGINE = InnoDB;

-- Insertion des données dans la table artisan
INSERT INTO artisan (artisan_nom, specialite, note, ville, a_propos, email, site_web, id_categorie, top_artisan) VALUES 
('Boucherie Dumont', 'Boucher', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boucherie.dumond@gmail.com', NULL, 1, FALSE),
('Au pain chaud', 'Boulanger', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'aupainchaud@hotmail.com', NULL, 1, TRUE), 
('Chocolaterie Labbé', 'Chocolatier', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 1, TRUE), 
('Traiteur Truchon', 'Traiteur', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 1, FALSE), 
('Orville Salmons', 'Chauffagiste', 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'o-salmons@live.com', NULL, 2, TRUE), 
('Mont Blanc Eléctricité', 'Electricien', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 2, FALSE), 
('Boutot & fils', 'Menuisier', 4.7, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 2, FALSE), 
('Vallis Bellemare', 'Plombier', 4.0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 2, FALSE), 
('Claude Quinn', 'Bijoutier', 4.2, 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'claude.quinn@gmail.com', NULL, 3, FALSE), 
('Amitee Lécuyer', 'Couturier', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 3, FALSE), 
('Ernest Carignan', 'Ferronier', 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'e-carigan@hotmail.com', NULL, 3, FALSE), 
('Royden Charbonneau', 'Coiffeur', 3.5, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'r.charbonneau@gmail.com', NULL, 4, FALSE), 
('Leala Dennis', 'Coiffeur', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 4, FALSE), 
('C\'est sup\'hair', 'Coiffeur', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'sup-hair@gmail.com', 'https://sup-hair.fr', 4, FALSE), 
('Le monde des fleurs', 'Fleuriste', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 4, FALSE), 
('Valérie Laderoute', 'Toiletteur', 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v-laredoute@gmail.com', NULL, 4, FALSE), 
('CM Graphisme', 'Webdesign', 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 4, FALSE);
