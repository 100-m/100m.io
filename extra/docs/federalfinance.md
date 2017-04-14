<div style="margin-bottom: 140px;">
  <img src="/extra/background.png"/>
  <img src="/extra/logo.png" style="position: absolute;top: 50%;left: 50px;width: 100px;" />
  <h1 style="-webkit-print-color-adjust: exact;position: absolute;top: 40%;left: 50px;color: rgba(255, 255, 255, 1);">Composants Graphiques</h1>
</div>

# Arkea Investment Solutions

---

# Introduction
A l'occasion de la refonte de ses sites web, Federal Finance Gestion et Arkea Investment Services souhaitent inclure sur chaque page fonds ou titres, un graphique présentant les performances de leurs fonds et de leurs benchmark.

100M propose une solution de reporting flexible et au format engageant. 100M est spécialisé dans le domaine de l'investissement. La solution 100M inclut des composants pouvant être embarqués individuellement et simplement sur un site internet ou intranet.

L'objectif est d'améliorer l'engagement clients en exposant les données à jour de performance du fonds, et ceci de manière simple et intuitive.

---

# Les Enjeux
L'initiative conjointe de Arkea IS et de 100M fait apparaitre 3 enjeux: le design des composants graphiques, la fiabilité de la donnée, et la facilité de l'intégration.

## Format Engageant
Les composants graphiques doivent être parfaitement lisibles et doivent inviter l'utilisateur à interagir. Ils doivent être compatibles sur les supports mobiles et entre les différents navigateurs web.

## Donnée Fiabilisée
L'enjeu est ici de garantir un affichage cohérent en toutes circonstances. Les composants doivent être robustes à un changement d'échantillonage des time-series, aux valeurs manquantes etc. 

## Intégration Facile
Les composants doivent pouvoir être intégrés en inserrant une simple ligne de code, avec une paramétrisation réduite au minimum.

---

# L'Application
100M a developpé une plateforme de marketing et reporting en-ligne dédiée aux Asset Managers. La plateforme 100M permet le developpement d'applications ou composants web sur-mesure.

## La Solution
### Visualisation & Exploration
Les composants développés par 100M facilitent une lecture visuelle rapide et synthétique de l'information.
Ils sont complètement flexibles et customisables selon les besoins des Clients.
Les application 100M permettent d'intéragir avec les données avec facilité et fluidité.

### Connexion & Collaboration
En plus d'être directement connectée aux données, les applications 100M peuvent intégrer des fonctionalités de collaboration innovantes. Le partage de contenu permet par exemple de gagner en productivité et en agilité.
La solution permet une réduction des coûts associés au reporting de l'ordre de 75%, tout en augmentant la qualité du contenu.

### Multi-format & Cross-Platform
Les applications 100M sont conçues pour une utilisation complètement mobile et sont compatibles desktop, tablette et smart phone.
Elles sont également multi-format et permettent l'export de rapports PDF. Les formats des rapports sont définis par le biais de templates customisables.

---

## La Technologie
### Le Front-End
100M a developpé le front-end software propriétaire en Javascript permettant la reactivité de l'application et des graphiques, la synchronisation en temps réel avec une base de données, et avec les écrans d'autres utilisateurs.

### Les moteurs de calculs en Back-End
100M a developpé un back-end en Python permettant d'effectuer le traitement de la donnée et le calcul des differents indicateurs.

### Hébergement de l'application
L'hébergement du front-end de l'application se fait sur des serveurs AWS dont le taux de disponibilité est garanti à 99.99%.

Les applications qui nécessitent une importante puissance de calcul sont hébergées sur un serveur dédié (4CPU, 7.5GB of RAM - c4.xlarge).

Pour des questions d'encapsulation et de sécurité, notre API est hébergée sur AWS Lambda (2CPU, 1GB of RAM, 500MB SDD).

### Hébergement base de données
Les databases sont hébergées sur un serveur dédié et optimisé (4CPU, 30GB of RAM, 80GB SDD - r3.xlarge avec postgresql sur Aurora).

---

# Le Projet

Le projet consiste à développer 3 composants distincts:
1. Un composant graphique hors fonds à formule
2. Un composant graphique pour les fonds à formule
3. Un composant graphique pour les titres de créance

Les titres de créance comportent le moins de fonctionnalités spécifiques et seront donc traités dans une première phase. 

## Phase 1: Développement et déploiement des composants graphiques titres de créance.

L'objectif de cette phase est de:
- optimiser le rendu et la responsivité du composant (pour mobile,  tablette)
- optimiser les performances
- assurer la compatibilité cross-navigateur
- faire le choix de la méthode d'intégration
- réaliser une intégration de bout-en-bout pour minimiser les risques lors de l'industrialisation.

**100M livrera un composant iFrame qui sera paramétré par une seule variable: l'ISIN d'un fonds.**

### 100M aura à charge
* de configurer les composants graphiques de sa solution.
* de gérer les tables de correspondance entre ISIN, type de graphique attendu, et type de donnée à aller chercher.
* de créer un connecteur à l'API de Fédéral Finance.
* de fiabiliser la donnée et de gérer les potentiels problèmes au niveau de l'API.
* de créer un export PDF.
* de mettre à disposition les composants graphiques via une commande d'intégration simple.
* d'héberger les composants graphiques et de les maintenir.

### Arkea aura à charge
* de fournir les données via un webservice (API)
* d'intégrer le composant sur une page du site www.fédéral-finance.fr

### Planning de livraison
Le composant sera livré en 2 semaines, à compter de l'accord client.

## Phase 2: Composants graphiques fonds à formule et hors formule.

### 100M aura à charge
* de configurer les composants graphiques de sa solution.
* de développer les composants graphiques spécifiques aux fonds.
* de se connecter aux API Fededral Finance.
* de calculer les indicateurs de rendement et de volatilité.
* de créer un export PDF.
* de mettre à disposition les composants graphiques via une commande d'intégration simple.
* d'héberger les composants graphiques et de les maintenir.

### Arkea aura à charge
* de fournir les données via un webservice (API)
* d'intégrer le composant sur une page du site www.fédéral-finance.fr

### Planning de livraison
Le composant sera livré en 2 semaines, à compter de la conclusion de la phase 1.

---

# Le Budget

##  Les développements spécifiques
100M met à disposition son équipe de développeurs front-end, ses quant's et ses chefs de projets pour conseiller Arkea et pour effectuer les développements spécifiques nécessaires.

Les développements spécifiques comprennent, à titre d'exemple:
* la customisation du progiciel,
* l'intégration au système Client et le travail spécifique des données,
* le calcul de l'attribution de performance,
* la création d'un nouveau template PDF pour l'application 100M,
* la création de Web Widgets intégrables par le Client.

Les développements se font en cycles *Agiles* en partenariat avec le client.  

Les développements sont facturés sur une base Jour Homme aux tarifs négociés dans notre accord cadre:

- Développeur junior: 450 Euros / Jour.
- Développeur senior: 700 Euros / Jour.
- Data Scientist: 800 Euros / Jour.
- Analyste Quantitatif Senior: 800 Euros / Jour.
- Chef de Projet: 800 Euros / Jour.
- Graphiste: 500 Euros / Jour.

---

## La license
### Description de le Solution 100M
L'application de reporting connecté 100M sert de support au suivi et à la commercialisation des produits d'investissement.

Elle permet aux équipes de gestion, de risques et des relations investisseurs, et aux client de collaborer au sein d'une même plateforme.

Nativement, l'application 100M permet de:
- Visualiser risques, performances et autres indicateurs.
- Interagir avec les graphiques.
- Synchroniser la donnée des rapports avec des sources externes.
- Fiabiliser la donnée par des mécanismes de vérification et de caching adaptés.

L'application est interactive et compatible au format tablette / mobile / desktop et fonctionne avec Chrome (version 33 et suivantes), Safari (version 8 et suivantes), Mozilla (version 40 et suivantes) et Internet Explorer (11 et suivantes).

*Sont inclus* dans le pricing de la solution:
- _Un nombre d'utilisateurs illimités_
- _La gestion des droits d'accès et profils utilisateurs, si requis_
- _L'hébergement des serveurs de calcul, si requis_
- _L'hébergement de la base de données, si requis_
- _La fonctionalité d'édition de rapport PDF_


### Les conditions
La license couvre le droit d’utilisation du progiciel et de ses développements spécifiques pour Arkea, 24h/24 et 7j/7

La license inclue également la maintenance corrective et évolutive, en particulier pour garantir la continuité du service lors des mises à jour des plateformes tierces (OS) ou navigateurs utilisés, la mise à jour effective de ces changements pour la configuration d'Arkea et le support téléphonique.

La license pour les composants est de 900 Euros / mois.

Les prix sont valables pour un engagement de 12 mois.

## Conditions De Paiement
Le paiement se fait en deux fois pour la partie intégration : 50% à la commande, 50% à la livraison.

Le paiement se fait par trimestre, en début de trimestre à émission de la facture par 100M pour la license.  

Les termes de cette proposition restent valables jusqu’au 30 Avril 2017.

---

## Chiffrage

### Phase 1
![](/extra/ff-table1.png)

### Phase 2
![](/extra/ff-table2.png)

---

# L'équipe dirigeante

### Clément Miglietti - Directeur Général
Avant de créer 100M, Clément a passé 10 ans dans la Finance à New York, Londres et Paris en tant que Directeur de la Recherche Quantitative (Crédit) chez BNP Paribas, puis Gérant chez Blue Mountain Capital.

Clément est diplômé de l'Ecole Polytechnique, et membre du Corps des Ponts et Chaussées (X-Ponts).

[Profil LinkedIn](https://fr.linkedin.com/in/clement-miglietti-05a3203)

### Valentin Brajon - Directeur Technique.
Avant de créer 100M, Valentin a developpé des solutions Web pendant 9 ans.
Il a été l'Architecte et le Développeur Web de nombreuses plateformes financières et notamment de celle de Parvest.

Valentin est ingénieur informatique diplômé de Sciences U.

[Profil LinkedIn](https://fr.linkedin.com/in/vbrajon/en)

---

## Votre Contact:
# clement@100m.io
