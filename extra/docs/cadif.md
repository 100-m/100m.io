<div style="margin-bottom: 140px;">
  <img src="/extra/background.png"/>
  <img src="/extra/logo.png" style="position: absolute;top: 50%;left: 50px;width: 100px;" />
  <h1 style="-webkit-print-color-adjust: exact;position: absolute;top: 40%;left: 50px;color: rgba(255, 255, 255, 1);"></h1>
</div>

# Crédit Agricole
<h1 style="margin-top:-50px; color:rgba(116, 228, 162, .7)"><small>Ile De France</small></h1>

---

# Introduction
Dans le cadre de son projet de digitalisation et d'aquisition de nouveaux clients, le Crédit Agricole lance une initiative pour s'équiper d'outils commerciaux innovants.

Le Crédit Agricole Ile de France souhaite développer un comparateur d'offres bancaires pour illustrer en toute transparence sa politique de tarification et afficher sa compétitivité.

100M est la solution de choix pour communiquer efficacement sous un format engageant. 100M apporte le logiciel, le savoir-faire technique et la connaissance des métiers de la banque et de la finance; éléments primordiaux à la bonne et rapide exécution du projet. 

L'objectif de ce projet est de développer un comparateur qui puisse être mis à disposition du public et des conseillers, et servir de canal d'acquisition client.

---

# Les Objectifs
L'initiative conjointe du Crédit Agricole d'Ile de France et de 100M s'articule autours des 3 objectifs: renforcer la relation Client, améliorer son expérience et créer de nouveaux vecteurs d'acquisition de part de marché.

## La Relation Client
Le Crédit Agricole souhaite jouer la carte de la transparence tarifaire avec ses Clients et offrir à ceux-ci la possibilité de comparer les prix avec ceux des offres concurrentes.  
L'objectif est de renforcer la *confiance* que ses Clients lui accordent et de favoriser la *rétention*.

## Le Conseil Client
Le Crédit Agricole souhaite progressivement développer un espace de "Coaching" client.  
Le but est ici d'améliorer l'*expérience* client en lui fournissant des outils de conseil à forte valeur ajoutée qui viendront se positionner en complément ou en support de la discussion avec un conseiller.

## L'Acquisition Client
Les outils développés dans le cadre du présent projet ont pour but d'être un vecteur d'aquisition Client: à la fois dans une perspective de *conversion de prospects*, mais également dans la perspective d'*équiper la base Client existante* avec d'autres solutions du Crédit Agricole.  

---

# La Solution 100M
100M a developpé une plateforme de dashboarding et de marketing en-ligne dédiée à l'industrie financière. Notre plateforme permet la déclinaison d'applications customisables pour nos clients.

Nous sommes des spécialistes du chiffre et de la vulgarisation de concepts financiers. Nos applications ont le plus souvent vocation à supporter une relation commerciale.

## L'expertise 100M
### Expérience Utilisateur
Nos applications facilitent une lecture visuelle, rapide et synthétique de l'information.  
100M a developpé une bibliothèque de répresentations graphiques qui savent mettre en confiance, favoriser la transparence du chiffre et communiquer une information aussi technique soit-elle.

### Connexion & Collaboration
Nos solutions sont directement connectées aux données tierces via une intégration simplifiée au maximum.   
La solution 100M comporte des modules de collaboration innovants afin d'éliminer toute friction dans la communication entre utilisateurs (ex: entre conseiller et client).
comme le partage d'écran et la crétion collaborative de contenu  

### Multi-format & Cross-Platform
Les applications 100M sont concues pour une utilisation complètement mobile et sont compatibles desktop, tablette et smart phone.  
Notre plateforme est également multi-format: nos applications permettent l'export de rapports PDF ou d'email de synthèse en conclusion d'une discussion client.

---

## La Technologie
### Le Front-End
100M a developpé le front-end software propriétaire en Javascript permettant la reactivité de l'application et des graphiques, la synchronisation en temps réel avec une base de donnée, et avec les écrans d'autres utilisateurs.

### Les moteurs de calculs en Back-End
100M a developpé un back-end en Python permettant d'effectuer le traitement de la donnée et le calcul des differents indicateurs.

### Hébergement de l'application
L'hébergement du front-end de l'application se fait sur des serveurs AWS dont le taux de disponibilité est garanti à 99.99%.

Les applications qui nécessitent une importante puissance de calcul sont hébergées sur un serveur dédié (4CPU, 7.5GB of RAM - c4.xlarge).

Pour des questions d'encapsulation et de sécurité, notre API est hébergée sur AWS Lambda (2CPU, 1GB of RAM, 500MB SDD).

### Hébergement base de données
Les databases sont hébergées sur un serveur dédié et optimisé (4CPU, 30GB of RAM, 80GB SDD - r3.xlarge avec postgresql sur Aurora).

---
# Le Projet Proof-Of-Concept
## Phase 1: Comparateur 'Simplifié' à destination du grand public 

L'objectif de cette phase 1 est de produire une application simple qui _démontre_ au client que l'offre du Crédit Agricole est la plus compétitive. 

L'application invitera le client à comparer les offres des différents compétiteurs en fonction de ses *besoins propres*. La comparaison entre les différentes offres se mettra à jour *en temps réel* au fur et à mesure que le client donne de l'information sur son profil d'utilisation.

L'application sera mise directement à disposition du public et pourra servir de canal d'aquisition client.

### Séquençage:
1. recueil d'information sur l'offre CADIF et celle des compétiteurs,
2. segmentation du marché, et positionnement compétitif, 
3. identification de la cible client et définition des objectifs marketing,
4. définition du parcours utilisateur,
5. production de l'application,
6. test et itérations

### Le livrable
Le livrable sera une application en ligne, type 'single-screen' et interactive. L'application 100M sera personnalisée et accordée avec la charte graphique du Crédit Agricole.

L'application sera compatible Tablette, Desktop et Mobile et fonctionnera sous Chrome (versions 33 et suivantes), Safari (versions 8 et suivantes), FireFox (version 40 et suivantes) et Internet Explorer (11 et suivante).

### 100M aura à charge de
* recueillir l'information sur les offres des compétiteurs de CADIF,
* établir une comparaison rigoureuse de ces offres,
* proposer un ciblage client,
* établir un questionnaire client qui permette d'effectuer une comparaison ciblée,
* proposer une interface client qui permette de comparer les offres,
* de mettre à disposition en ligne, et protégée par mot de passe l'application prototype.

### Le Crédit Agricole aura à charge de
* fournir la fiche produit concernée,
* donner le nom de 5 concurrents,
* participer à la segmentation marché,
* donner feedbacks et commentaires sur les rendus.

### Planning de livraison
L'application sera livrée dans un delais de 8 semaines à compter de la date de l'accord client.

---
## Phase 2: Comparateur 'Expert' à destination des conseillers

En phase 2, on produira une application experte dans la continuité de la précédente.

L'objectif est de fournir au conseiller un support à la vente sous la forme d'un outil de comparaison détaillé.

### Séquençage
*En attente de la validation du périmètre de la phase 1.*

### Le livrable
*En attente de la validation du périmètre de la phase 1.*

### 100M aura à charge de
*En attente de la validation du périmètre de la phase 1.*

### Le Crédit Agricole aura à charge de
*En attente de la validation du périmètre de la phase 1.*

### Planning de livraison
*En attente de la validation du périmètre de la phase 1.*

---
# Le Budget

## Les développements spécifiques
*En attente de définition du périmètre.*

## La license
*En attente de définition du périmètre.*

## Les conditions
*En attente de définition du périmètre.*

## Conditions De Paiement
*En attente de définition du périmètre.*

---
# L'équipe dirigeante

### Clément Miglietti - Directeur Général
Avant de créer `100M`, Clément a passé 10 ans dans la Finance à New York, Londres et Paris en tant que Directeur de la Recherche Quantitative (Crédit) chez BNP Paribas, puis Gérant chez Blue Mountain Capital.

Clément est diplômé de l'Ecole Polytechnique, et membre du Corps des Ponts et Chaussées (X-Ponts).

### Valentin Brajon - Directeur Technique.
Avant de créer 100M, Valentin a developpé des solutions Web pendant 9 ans.
Il a été l'Architecte et le Développeur Web de nombreuses plateformes financières et notamment de celle de Parvest.

Valentin est ingénieur informatique diplômé de Sciences U.

---

## Votre Contact:
# clement@100m.io
