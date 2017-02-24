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
Les outils développés dans le cadre du présent projet ont pour but d'être un vecteur d'aquisition Client: à la fois dans une perspective de *conversion de prospects*, mais également dans la perspective d'*équiper la base clients existante* avec d'autres solutions du Crédit Agricole.  

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
La solution 100M comporte des modules de collaboration innovants afin d'éliminer toute friction dans la communication entre utilisateurs (ex: entre conseiller et client). Le partage d'écran et la création collaborative de contenu en sont des exemples.

### Multi-format & Cross-Platform
Les applications 100M sont conçues pour une utilisation complètement mobile et sont compatibles desktop, tablette et smart phone.  
Notre plateforme est également multi-format: nos applications permettent l'export de rapports PDF ou d'email de synthèse en conclusion d'une discussion client.

---

## La Technologie
### Le Front-End
100M a developpé le front-end software propriétaire en Javascript permettant la réactivité de l'application et des graphiques, la synchronisation en temps réel avec une base de données, et avec les écrans d'autres utilisateurs.

### Les moteurs de calculs en Back-End
100M a developpé un back-end en Python permettant d'effectuer le traitement de la donnée et le calcul des differents indicateurs.

### Hébergement de l'application
L'hébergement du front-end de l'application se fait sur des serveurs AWS dont le taux de disponibilité est garanti à 99.99%.

Les applications qui nécessitent une importante puissance de calcul sont hébergées sur un serveur dédié (4CPU, 7.5GB of RAM - c4.xlarge).

Pour des questions d'encapsulation et de sécurité, notre API est hébergée sur AWS Lambda (2CPU, 1GB of RAM, 500MB SDD).

### Hébergement des bases de données
Les databases sont hébergées sur un serveur dédié et optimisé (4CPU, 30GB of RAM, 80GB SDD - r3.xlarge avec postgresql sur Aurora).

---
# Le Projet
## Phase Proof-Of-Concept:  Comparateur 'Simplifié' à destination du grand public 

L'objectif de cette phase 1 est de produire une application simple qui _démontre_ au client que l'offre du Crédit Agricole est la plus compétitive. 

L'application invitera le client à comparer les offres des différents compétiteurs en fonction de ses *besoins propres*. La comparaison entre les différentes offres se mettra à jour *en temps réel* au fur et à mesure que le client donne de l'information sur son profil d'utilisation.

L'application sera mise directement à disposition du public et pourra servir de canal d'aquisition client.

### Séquençage:
1. recueil d'information sur l'offre de CADIF et celle de 25 compétiteurs
Les compétiteurs envisagés sont les suivants: Allianz Banque, AXA Banque, Banque Palatine, Banque Populaire Rives de Paris, Banque Privée Européenne, Barclays, BforBank, BNP Paribas, Boursorama Banque, Caisse d'Epargne Ile-de-France , CIC, Crédit Agricole Ile-de-France, Crédit Coopératif, Crédit Mutuel Île-de-France, e.LCL, Fortuneo, Groupama Banque, Hello Bank, HSBC, ING Direct, La Banque Postale, LCL, Macif, Monabanq, Société Générale, Soon.

2. conception de la grille de comparaison, normalisation des offres et classification au sein de la grille
Livraison d'un tableau excel présentant le comparatif de l'ensemble des offres concurrentes.

3. revue de la segmentation du marché et identification de la cible client
Le Crédit Agricole fournira une segmentation marché sous la forme de profiles de clients types, de tailles de segments, ainsi que des statistiques de consommation (et moyenne et variabilité de consommation) sur chaque composante de l'offre.

4. définition du parcours utilisateur au sein du questionnaire robot
Sur la base de la segmentation client, 100M établira 'l'arbre de décision' correspondant au questionnaire robot dans l'application qui permet de placer l'utilisateur dans un segment de marché, et au sein du segment.
Livraison de l'arbre de questions à poser.

5. design de l'application
Livraison de l'UI/UX.

6. développement de l'application 
Itération en mode agile sur le développement.

7. test et mise en ligne

### L'application livrée
Le livrable sera une application en ligne, type 'single-screen' et interactive. L'application 100M sera personnalisée et accordée avec la charte graphique du Crédit Agricole.

L'application sera compatible Tablette, Desktop et Mobile et fonctionnera sous Chrome (versions 33 et suivantes), Safari (versions 8 et suivantes), FireFox (version 40 et suivantes) et Internet Explorer (11 et suivante).

### 100M aura à charge de
* recueillir l'information sur les offres des compétiteurs de CADIF,
* établir une comparaison rigoureuse de ces offres,
* établir un questionnaire client qui permette d'effectuer une comparaison ciblée,
* proposer une interface client qui permette de comparer les offres,
* de mettre à disposition en ligne, et protégée par mot de passe l'application prototype.

### Le Crédit Agricole aura à charge de
* fournir la fiche produit concernée,
* donner le nom de 5 concurrents,
* fournir la segmentation marché,
* donner feedbacks et commentaires sur les rendus.

### Planning de livraison
L'application sera livrée dans un delais de 8 semaines à compter de la date de l'accord client.

---
## Phase 2: Comparateur 'Expert' à destination des conseillers

En phase 2, on produira une application experte dans la continuité de la précédente.

L'objectif est de fournir au conseiller un support à la vente sous la forme d'un outil de comparaison détaillé.

Il s'agit là d'etoffer l'étude réalisée lors de la proof-of-concept:
* en élargissant le périmètre concurrentiel
* en élargissant les cibles clients
* en packageant l'application au sein d'un outil déployable auprès des conseillers.

---
# Le Budget
## Les développements spécifiques
100M met à disposition son équipe de développeurs front-end, ses quant's et ses chefs de projets pour conseiller le Credit Agricole et pour effectuer les développements spécifiques nécessaires.

Les développements spécifiques comprennent, à titre d'exemple:
* la customisation du progiciel,
* l'intégration au système Client et le travail spécifique des données,

Les développements se font en cycles *Agiles* en partenariat avec le client.  
Les développements sont facturés sur une base Jour Homme aux tarifs suivants:

- Développeur junior: 550 Euros / Jour.
- Développeur senior / Architecte: 800 Euros / Jour.
- Data Scientist: 850 Euros / Jour.
- Analyste Quantitatif Senior: 990 Euros / Jour.
- Chef de Projet: 800 Euros / Jour.
- Graphiste: 600 Euros / Jour.

## Chiffrage de la Proof-Of-Concept
![](/extra/cadif-poc.png)

## La license
La license couvre le droit d’utilisation du progiciel et de ses développements spécifiques pour la Crédit Agricole Ile de France, 24h/24 et 7j/7

La license inclue également la maintenance corrective et évolutive, en particulier pour garantir la continuité du service lors des mises à jour des plateformes tierces (OS) ou navigateurs utilisés, la mise à jour effective de ces changements pour la configuration de Schelcher du progiciel et le support téléphonique.

Afin de permettre une large diffusion de nos applications et de faciliter la collaboration, la license est chiffrée uniquement "à l'application" et non pas à l'utilisateur.

La license pour l'application 'proof-of-concept' est de 600 Euros / mois, hébergement inclus.

Les prix sont valables pour un engagement de 6 mois renouvelables.

## Conditions De Paiement
Le paiement se fait en deux fois pour la partie intégration : 50% à la commande, 50% à la livraison.

Le paiement se fait par trimestre, en début de trimestre à émission de la facture par 100M pour la license.  

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
