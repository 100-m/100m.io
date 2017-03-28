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

Le Crédit Agricole Ile de France souhaite développer un comparateur d'assurance pour identifier les manques dans la couverture de ses clients, et leur proposer des solutions adaptées. Il est à la recherche d'une solution sur-mesure dont le périmètre puisse évoluer dans le temps.

100M est la solution de choix pour communiquer efficacement sous un format engageant. 100M apporte la base logiciel, le savoir-faire technique et la connaissance des métiers de la banque et de la finance; éléments primordiaux à la bonne et rapide exécution du projet. 

L'objectif de ce projet est de développer un comparateur d'assurance qui puisse être mis à disposition du public et des conseillers, et servir de canal d'acquisition client.

---

# Ce Que Nous Avons Compris De Vos Objectifs
L'initiative conjointe du Crédit Agricole d'Ile de France et de 100M s'articule autours de 3 objectifs: améliorer l'expérience Client, apporter un conseil de qualité et créer de nouveaux vecteurs d'acquisition de parts de marché.

## Améliorer l'Expérience Client 
Le Crédit Agricole souhaite allier l'__instantanéité__ du conseil d'un robo-advisor à la __rassurance__ du dialogue avec un conseiller. L'application doit donc proposer un expérience fluide et faire remonter informations et recommendations auprès du conseiller qui pourra ensuite rentrer en relation avec son Client.

## Renforcer La Dimension Conseil
L'objectif est de __vendre mieux__, en identifiant les manques dans la couverture du Client, et en lui proposant des produits qui correspondent à son profil de risque et à ses besoins.

## Augmenter l'Acquisition Client
Les outils développés dans le cadre du présent projet ont pour but d'être un vecteur d'aquisition Client: à la fois dans une perspective de __conversion de prospects__, mais également dans la perspective d'__équiper la base clients existante__ avec d'autres solutions du Crédit Agricole.
L'application développée devra permettre de suivre le 'funnel' d'acquisition Client.  

---

# Notre Perception Des Enjeux
En terme de réalisation, le projet se décompose en 3 grandes composantes: la données, le moteur d'interview, et le moteur de conseil.

## La Donnée
L'enjeu est ici de constituer, ou d'acquérir une base de données de contrats d'assurance, et de la maintenir à jour.

## Le Moteur d'Interview
La seconde composante du projet est la construction d'un moteur d'interview paramétrable. Le moteur doit être capable d'adapter les questions en fonction des réponses précédemment fournies. En plus de l'interface Client, il doit comporter une interface Administrateur qui permette de changer la séquence de questions et les liens logiques entre les questions.

## Le Moteur de Conseil
Le moteur de conseil est constitué d'un ensemble de règles de gestion qui doit permettre de générer des recommendations.
Les recommendations sont générées sur la base des informations transmises par le moteur de questions. Le moteur de conseil doit comporter une interface Administrateur qui permette l'ajout ou la suppression de règles de gestion.

---

# Notre Approche

## 1. Eprouver la solution sur un P.O.C.
Nous vous proposons d'éprouver le design de la solution en faisant un P.O.C. sur un périmétre restreint en termes: de produit, de base de données de contrats, de nombre de questions posées au Client, et de règles de gestion.
Spécifiquement, nous vous suggérons de se concenter sur:
* l'assurance habitation,
* avec une base constituée des 12 contrats les plus courants,
* une interview robot de 10 questions conclue par un bilan,
* un ensemble de règles de gestions d'une trentaine de règles.

## 2. Industrialisation
Suite au P.O.C., on pourra industrialiser le comparateur et à cette occasion: 
* on enrichira la base de donnée de contrats 
* on étoffera l'interview robot 
* on complexifiera le moteur de recommendations

## 3. Elargissement
Dans un troisième temps, on pourra étendre l'approche à d'autres produits d'assurance.

---

# La Solution 100M
100M a developpé une plateforme de dashboarding et de marketing en-ligne dédiée à l'industrie financière. Notre plateforme permet la __déclinaison d'applications customisables__ pour nos clients.

Nous sommes des spécialistes du chiffre et de la vulgarisation de concepts financiers. Nos applications ont le plus souvent vocation à supporter une relation commerciale.

## L'expertise 100M
### Expérience Utilisateur
Nos applications facilitent une __lecture graphique, rapide et synthétique__ de l'information.  
100M a developpé une bibliothèque de répresentations graphiques qui savent mettre en confiance, favoriser la transparence du chiffre et communiquer une information aussi technique soit-elle.

### Collaboration
Nos solutions sont directement __connectées__ aux données tierces via une intégration simplifiée au maximum.   
La solution 100M comporte des modules de collaboration innovants afin d'éliminer toute friction dans la communication entre utilisateurs (ex: entre conseiller et client). Le partage d'écran et la création collaborative de contenu en sont des exemples.

### Cross-Platform
Les applications 100M sont conçues pour une __utilisation complètement mobile__ et sont compatibles desktop, tablette et smart phone.  
Notre plateforme est également multi-format: nos applications permettent l'export de rapports PDF ou d'email de synthèse en conclusion d'une discussion client.

---

## La Technologie 100M
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
## Phase Proof-Of-Concept:  Comparateur 'Simplifié' d'Assurance Habitation 

L'objectif de cette première phase est double: présenter une première version fonctionnelle de l'application et poser l'ensemble des fondations techniques.  

### L'application livrée
Le livrable sera une application en ligne, personnalisée et accordée avec la charte graphique du Crédit Agricole.

L'application sera compatible Tablette, Desktop et Mobile et fonctionnera sous Chrome (versions 33 et suivantes), Safari (versions 8 et suivantes), FireFox (version 40 et suivantes) et Internet Explorer (11 et suivante).

Le livrable sera constitué de:
* une application Client qui conduira l'interview robot.  
L'application invitera le client à comparer les offres des différents compétiteurs en fonction de ses __besoins propres__. La comparaison entre les différentes offres se mettra à jour __en temps réel__ au fur et à mesure que le client donne de l'information sur son profil d'utilisation.  

* une interface Administrateur pour paramétrer l'interview robot.  
L'interface permettra à l'administrateur d'éditer les questions posées par le robot lors de l'interview et de paramétrer leur enchainement.

* une interface Administrateur pour paramétrer le moteur de Conseil.
L'interface permettra à l'administrateur d'éditer les règles de gestion des recommendations.

* une base de données de contrats d'assurance habitation, normalisée.

L'application Client pourra être mise à disposition du public et servir de canal d'aquisition client.

### Séquençage:  
1. recueil d'information sur l'offre de CADIF et celle de 12 compétiteurs.
Les compétiteurs envisagés sont les suivants: 
Axa, Maaf, Macif, Matmut, GMF, Allianz, Mma, Groupama, Maif, Credit Mutuel, Generali, Direct Assurance, 

2. conception de la grille de comparaison, normalisation des offres et classification au sein de la grille.  
__Livraison d'un tableau excel présentant le comparatif de l'ensemble des offres concurrentes.__  

3. revue de la segmentation du marché, des recommendations conseils cibles et définition du parcours utilisateur au sein du questionnaire-robot.
Le Crédit Agricole fournira une segmentation marché sous la forme de profiles de clients types parmi lesquels l'interview devra discriminer.  

4. design de l'application Client.  
__Livraison de l'UI/UX application Client.__

5. design de l'interface administrateur interview-robot.  
__Livraison de l'UI/UX interface administrateur moteur interview.__

6. design de l'interface administrateur moteur de conseil.  
__Livraison de l'UI/UX interface administrateur moteur conseil.__

7. développement du back-end.

8. tests et mise en ligne.  
__Livraison de l'application__


### Le Crédit Agricole aura à charge de
* établir la liste de questions à poser au Client ou, à défaut, de fournir une segmentation Client.
* fournir la liste des situations que le moteur de conseil doit examiner.
* donner feedbacks et commentaires sur les rendus.  


### 100M aura à charge de
* recueillir l'information sur les offres des compétiteurs de CADIF,  
* établir une comparaison normative de ces offres,  
* établir les différents parcours de l'interview Client et/ou la liste des questions,
* proposer une interface client, 
* mettre à disposition une interface administrateur pour paramétrer l'interview,
* définir les règles de gestion du moteur de conseil,
* mettre à disposition une interface administrateur pour paramétrer le moteur de conseil,
* mettre à disposition en ligne, et protégée par mot de passe l'application prototype.  


### Planning de livraison
L'application sera livrée dans un delai de 8 semaines à compter de la date de l'accord client.  

---

# Le Budget
## Les développements spécifiques
100M met à disposition son équipe de développeurs front-end, ses quant's et ses chefs de projets pour conseiller le Crédit Agricole et pour effectuer les développements spécifiques nécessaires.

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
![](/extra/cadif-assurance-poc.png)

## La license
La license couvre le droit d’utilisation du progiciel et de ses développements spécifiques pour la Crédit Agricole Ile de France, 24h/24 et 7j/7

La license inclut également la maintenance corrective et évolutive, en particulier pour garantir la continuité du service lors des mises à jour des plateformes tierces (OS) ou navigateurs utilisés, la mise à jour effective de ces changements pour la configuration du progiciel et le support téléphonique.

Afin de permettre une large diffusion de nos applications et de faciliter la collaboration, la license est chiffrée uniquement "à l'application" et non pas à l'utilisateur.

La license pour l'application 'proof-of-concept' est de 800 Euros / mois, hébergement inclus.

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
