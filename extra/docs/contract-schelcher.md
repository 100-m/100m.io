<div style="margin-bottom: 140px;">
  <img src="/extra/background.png"/>
  <img src="/extra/logo.png" style="position: absolute;top: 50%;left: 50px;width: 100px;" />
  <h1 style="-webkit-print-color-adjust: exact;position: absolute;top: 40%;left: 50px;color: rgba(255, 255, 255, 1);">Reporting OnDemand</h1>
</div>

# Arkea Investment Solutions

---

# Introduction
Dans le cadre du projet Digitalisation de Arkéa Investment Services, l’initiative « Reporting On Demand » a été retenue comme prioritaire.

Schelcher Prince Gestion souhaite avancer dans sa digitalisation et adopter une solution de reporting performante qui réponde à la fois aux attentes des clients, des gérants et de la maîtrise des risques.

100M est la solution de choix pour mettre en valeur la qualité de la gestion et communiquer efficacement sous un format engageant. 100M apporte le logiciel, le savoir-faire technique et la connaissance des métiers de l'investissement; éléments primordiaux à la bonne et rapide exécution du projet.

L'objectif est de permettre aux gérant et aux clients institutionnels d’avoir une vision dynamique et personnalisée de leurs portefeuilles et de leurs mandats.

---

# Les Objectifs
L'initiative conjointe de Arkea IS et de 100M s'articule autours des 3 objectifs: Engager, Analyser et Automatiser.

## Engager
Schelcher Prince et Federal Finance souhaitent expliquer le positionnement de leur gestion, mettre en avant sa qualité et sa performance sous un format attrayant.  
Pour maximiser l'engagement, SPG souhaite déployer un reporting connecté et pouvoir le customiser pour chaque client.

## Analyser
Un des objectifs primordiaux est de faciliter l'analyse pour le client qui veut rester informé sur le respect des mandats confiés.
L'équipe de gestion et de risques souhaite également monitorer ses expositions en tant réel et améliorer son attribution et sa contribution de performance.

## Automatiser
SPG souhaite mettre en place un reporting industriel et automatisé pour pouvoir assurer un traitement en temps réel et gagner en productivité.

---

# L'Application
100M a developpé une plateforme en-ligne sécurisée de reporting sur-mesure et de marketing dédiée aux Asset Managers.

## La Solution
### Visualisation & Exploration
L'application facilite une lecture visuelle rapide et synthétique du portefeuille.
La possibilité d'effectuer un 'drill-down' dans les aggrégats permet une analyse par poche d'actifs selon les indicateurs choisis.

### Connexion & Collaboration
En plus d'être directement connectée aux données, l'application 100M comporte des fonctionalités de collaboration innovantes. Le partage d'écran et l'édition de contenu collaborative permettent de gagner en productivité et en agilité.
La solution permet une réduction des couts associés au reporting de l'ordre de 75%, tout en augmentant la qualité du contenu.

### Multi-format & Cross-Platform
L'application 100M est concue pour une utilisation complètement mobile et est compatible desktop, tablette et smart phone.
Elle est également multi-format et permet l'export de rapports PDF. Le format des rapports est défini par le biais de templates customisables.

---

### Attribution et Contribution de Performance
Dans le cadre de l'amélioration du reporting, 100M produira une contribution de performance et améliorera l'attribution de performance existante.

---

## La Technologie
### Le Front-End
100M a developpé le front-end software propriétaire en Javascript permettant la reactivité de l'application et des graphiques, la synchronisation en temps réel avec une base de donnée, et avec les écrans d'autres utilisateurs.

### Les moteurs de calculs en Back-End
100M a developpé un back-end en Python permettant d'effectuer le traitement de la donnée, le calcul des differents indicateurs et une contribution de performance.

### Hébergement de l'application
L'hébergement du front-end de l'application se fait sur des serveurs AWS dont le taux de disponibilité est garanti à 99.99%.

Les applications qui nécessitent une importante puissance de calcul sont hébergées sur un serveur dédié (4CPU, 7.5GB of RAM - c4.xlarge).

Pour des questions d'encapsulation et de sécurité, notre API est hébergée sur AWS Lambda (2CPU, 1GB of RAM, 500MB SDD).

### Hébergement base de données
Les databases sont hébergées sur un serveur dédié et optimisé (4CPU, 30GB of RAM, 80GB SDD - r3.xlarge avec postgresql sur Aurora).

---

# Le Projet
## Phase 1: Prototypage sur un rapport convertible Schelcher Prince Gestion

L'objectif de la phase de prototypage est de:
- cadrer le besoin,
- de définir les indicateurs de suivi de portefeuille,
- d'établir le parcours utilisateur au sein de l'application,
- de définir les formats d'échange de données,
- de produire une application prototype

### Le livrable
Le livrable sera une application en ligne interactive. L'application 100M sera personnalisée et accordée avec la charte graphique de Schelcher Prince.

L'application sera compatible Tablette, Desktop et Mobile et fonctionnera sous Chrome (versions 33 et suivantes), Safari (versions 8 et suivantes), FireFox (version 40 et suivantes) et Internet Explorer (11 et suivante).

Le prototype sera livré avec une mise-à-jour mensuelle des données.

### 100M aura à charge
* de concevoir le parcours utilisateur et les écrans,
* de traiter les données fournies par Schelcher Prince,
* de customiser le progiciel et d'adapter les graphiques,
* de mettre à disposition en ligne, et protégée par mot de passe l'application prototype.

### Schelcher aura à charge
* de fournir un fichier model du format de données,
* de fournir un model papier ou PDF de reporting existant,
* la validation des écrans et du parcours utilisateur,
* de mettre à disposition les données mensuellement pour mise-à-jour.

### Planning de livraison
Le prototype sera livrée fin Février pour un premier rapport mensuel produit en Mars.

---

## Phase 2: Déploiement et extension sur la gamme convertible Schelcher Prince Gestion
L'objectif de la phase de déploiement et extension est de:
* connecter l'application pour permettre une mise-à-jour des données automatique et quotidienne,
* étendre la couverture du reporting à l'ensemble de la gamme convertible.

### Le livrable
Le livrable sera une version de production du prototype, augmentée d'un écran de sélection de fonds avec un connecteur back-end pour mise-à-jour des données.

### 100M aura à charge
* de créer les connecteurs nécessaires pour alimenter l'application en données,
* concevoir l'écran de sélection de fonds,
* de customiser les graphiques et le rapport de gestion pour les particularités de chaque fonds.

### Schelcher aura à charge
* mettre à disposition les flux de données sur les mouvements, les valorisations ligne-à-ligne (NAV) et de parts (VL),  
* mettre à disposition les risques, ligne-à-ligne sur les portefeuilles.

### Planning De Livraison
Le deploiement et l'extension se feront en 4 sprints de 2 semaines:
Sprint 1: connexion au système pour les updates du fonds pilote.
Sprint 2: modification du front-end et customisation des pages pour la gamme convertible.
Sprint 3: connexion au système pour les mise-à-jour de l'ensemble des fonds de la gamme convertible.
Sprint 4: testing, monitoring de l'application et correction d'erreurs.

---

## L'attribution de performance

### L'objectif
L'objectif est d'atteindre une attribution de performance ligne-à-ligne mise-à-jour sur une base quotidienne.

### Planning De Livraison
L'amélioration de l'attribution de performance se fera en 3 sprints initiaux et une phase d'amélioration continue.
- *Sprint 1*: Etablissement d'une contribution journalière de la performance décomposée par Classe d'Actif, Zone Géographique, Secteur d'Activité et Notation. Le sprint 1 sera livré avec le prototype.
- *Sprint 2*: Etablissement d'une attribution de performance décomposée en 'Grecques' du 1er ordre (delta action, delta crédit, delta taux, et theta). Le sprint 2 sera livré à l'occasion du déploiement.
- *Sprint 3*: Etablissement d'une attribution de performance pour le benchmark et comparaison .
- Amélioration Continue: revue continue du calcul des grecques, ajout des effets du 2nd ordre et amélioreration des process opérationnels (gestion des erreurs de booking, des données manquantes dans les risques).

---

# Le Budget

##  Les développements spécifiques
100M met à disposition son équipe de développeurs front-end, ses quant's et ses chefs de projets pour conseiller Schelcher et pour effectuer les développements spécifiques nécessaires.

Les développements spécifiques comprennent, à titre d'exemple:
* la customisation du progiciel,
* l'intégration au système Client et le travail spécifique des données,
* le calcul de l'attribution de performance,
* la création d'un nouveau template PDF pour l'application 100M,
* la création de Web Widgets intégrables par le Client.

Les développements se font en cycles *Agiles* en partenariat avec le client.  

Les développements sont facturés sur une base Jour Homme aux tarifs suivants:

- Développeur junior: 550 Euros / Jour.
- Développeur senior: 800 Euros / Jour.
- Data Scientist: 850 Euros / Jour.
- Analyste Quantitatif Senior: 990 Euros / Jour.
- Chef de Projet: 800 Euros / Jour.
- Graphiste: 600 Euros / Jour.

---

## La license
### Description de le Solution 100M
L'application de reporting connecté 100M sert de support au suivi et à la commercialisation des produits d'investissement.

Elle permet aux équipes de gestion, de risques et des relations investisseurs de collaborer au sein d'une même plateforme.

Nativement, l'application 100M permet de:
- Visualiser les risques et les performances d'un portefeuille.
- 'Drill-down' dans les risques et les positions jusqu'au ligne à ligne.
- Comparer le positionnement d'un portefeuille avec un benchmark.
- Collaborer à l'édition du commentaire de gestion.
- Effectuer des présentations à distance en utilisant la synchronisation d'écran intégrée.
- Synchroniser la donnée des rapports avec un PMS interne.
- Sécuriser le contenu par un mécanisme d'authentification.

L'application est interactive et compatible au format tablette / mobile / desktop et fonctionne avec Chrome (version 33 et suivantes), Safari (version 8 et suivantes), Mozilla (version 40 et suivantes) et Internet Explorer (11 et suivantes).

*Sont inclus* dans le pricing de la solution:
- _Un nombre d'utilisateurs illimités_
- _La gestion des droits d'accès et profils utilisateurs_
- _L'hébergement des serveurs de calcul_
- _L'hébergement de la base de données_
- _La fonctionalité d'édition de rapport PDF_
- _Les Web Widgets crées à partir des rapports existants_


### Les conditions
La license couvre le droit d’utilisation du progiciel et de ses développements spécifiques pour Schelcher, 24h/24 et 7j/7

La license inclue également la maintenance corrective et évolutive, en particulier pour garantir la continuité du service lors des mises à jour des plateformes tierces (OS) ou navigateurs utilisés, la mise à jour effective de ces changements pour la configuration de Schelcher du progiciel et le support téléphonique.

Afin de permettre une large diffusion et de faciliter la collaboration, la license est chiffrée uniquement sur la base du nombre de documents créés et comprend un accès pour un nombre illimités d'utilisateurs.

Les prix sont dégressifs avec le nombre de fonds portés au sein de la solution:
- Les 5 premiers fonds: 700 Euros / mois / fonds.
- Entre le 6ème et 10ème fonds: 400 Euros / mois / fonds.
- Au-delà du 11ème fonds: 280 Euros / mois / fonds.

Les prix sont valables pour un engagement de 12 mois.

---

## Conditions De Paiement
Le paiement se fait en deux fois pour la partie intégration : 50% à la commande, 50% à la livraison.

Le paiement se fait par trimestre, en début de trimestre à émission de la facture par 100M pour la redevance.  

Les termes de cette proposition restent valables jusqu’au 28 Fevrier 2017.

---

## Chiffrage de la Phase de Prototypage et de Déploiement

![](/extra/table1.png)
---
![](/extra/table2.png)
---
![](/extra/table3.png)

---

# L'équipe dirigeante

### Clément Miglietti - Directeur Général
Avant de créer 100M, Clément a passé 10 ans dans la Finance à New York, Londres et Paris en tant que Directeur de la Recherche Quantitative (Crédit) chez BNP Paribas, puis Gérant chez Blue Mountain Capital.

Clément est diplômé de l'Ecole Polytechnique, et membre du Corps des Ponts et Chaussées (X-Ponts).

### Valentin Brajon - Directeur Technique.
Avant de créer 100M, Valentin a developpé des solutions Web pendant 9 ans.
Il a été l'Architecte et le Développeur Web de nombreuses plateformes financières et notamment de celle de Parvest.

Valentin est ingénieur informatique diplômé de Sciences U.

---

## Votre Contact:
# clement@100m.io 

<footer>
  <grid>
    <div col="1/2">
      <p>Votre Contact est <a att href="https://100m.io" target="_blank"><strong>Clement Miglietti</strong></a></p>
    </div>
    <div col="1/2" txt="r">
      <a att href="#fintex" target="_blank">06 77 73 68 74</a>
      - <strong>clement@100m.io</strong>
    </div>
  </grid>
</footer>
