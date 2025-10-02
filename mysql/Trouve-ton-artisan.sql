-- Création de la base de données pour Trouve ton artisan
CREATE DATABASE IF NOT EXISTS trouve-ton-artisan_database;

-- Utilisation de la base de données
USE trouve-ton-artisan_database;


CREATE TABLE `trouve-ton-artisan_database`.`artisan` 
(`id_artisan` INT NOT NULL AUTO_INCREMENT , 
`artisan_nom` VARCHAR(50) NOT NULL , 
`specialite` VARCHAR(50) NOT NULL , 
`note` DECIMAL NOT NULL , 
`ville` VARCHAR(50) NOT NULL , 
`a_propos` TEXT NOT NULL , 
`email` VARCHAR(50) NOT NULL , 
`site_web` VARCHAR(50) NULL , 
`categorie` VARCHAR(50) NOT NULL , 
`top_artisan` BOOLEAN NOT NULL , 
PRIMARY KEY (`id_artisan`), 
INDEX (`categorie`)) 
ENGINE = InnoDB;

INSERT INTO `artisan` (`id_artisan`, `artisan_nom`, `specialite`, `note`, `ville`, `a_propos`, `email`, `site_web`, `categorie`, `top_artisan`) VALUES 
(NULL, 'Boucherie Dumont', 'Boucher', '4,5', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boucherie.dumond@gmail.com', NULL, 'Alimentation', '0'),
(NULL, 'Au pain chaud', 'Boulanger', '4,8', 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'aupainchaud@hotmail.com', NULL, 'Alimentation', '1'), 
(NULL, 'Chocolaterie Labbé', 'Chocolatier', '4,9', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 'Alimentation', '1'), 
(NULL, 'Traiteur Truchon', 'Traiteur', '4,1', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 'Alimentation', '0'), 
(NULL, 'Orville Salmons', 'Chauffagiste', '5,0', 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'o-salmons@live.com', NULL, 'Bâtiment', '1'), 
(NULL, 'Mont Blanc Eléctricité', 'Electricien', '4,5', 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 'Bâtiment', '0'), 
(NULL, 'Boutot & fils', 'Menuisier', '4,7', 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 'Bâtiment', '0'), 
(NULL, 'Vallis Bellemare', 'Plombier', '4,0', 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 'Bâtiment', '0'), 
(NULL, 'Claude Quinn', 'Bijoutier', '4,2', 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'claude.quinn@gmail.com', NULL, 'Fabrication', '0'), 
(NULL, 'Amitee Lécuyer', 'Couturier', '4,5', 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 'Fabrication', '0'), 
(NULL, 'Ernest Carignan', 'Ferronier', '5,0', 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'e-carigan@hotmail.com', NULL, 'Fabrication', '0'), 
(NULL, 'Royden Charbonneau', 'Coiffeur', '3,5', 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'r.charbonneau@gmail.com', NULL, 'Services', '0'), 
(NULL, 'Leala Dennis', 'Coiffeur', '3,8', 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 'Services', '0'), 
(NULL, 'C\'est sup\'hair', 'Coiffeur', '4,1', 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'sup-hair@gmail.com', 'https://sup-hair.fr', 'Services', '0'), 
(NULL, 'Le monde des fleurs', 'Fleuriste', '4,6', 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 'Services', '0'), 
(NULL, 'Valérie Laderoute', 'Toiletteur', '4,5', 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v-laredoute@gmail.com', NULL, 'Services', '0'), 
(NULL, 'CM Graphisme', 'Webdesign', '4,4', 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 'Services', '0');
