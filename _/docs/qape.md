<div style="margin-bottom: 140px;">
  <img src="/extra/background.png"/>
  <img src="/extra/logo.png" style="position: absolute;top: 50%;left: 50px;width: 100px;" />
  <h1 style="-webkit-print-color-adjust: exact;position: absolute;top: 40%;left: 50px;color: rgba(255, 255, 255, 1);"></h1>
</div>

# QAPE
<h1 style="margin-top:-50px; color:rgba(116, 228, 162, .7)"><small>Comparateur d'Assurance en Ligne</small></h1>

---

# Contexte
QAPE souhaite développer un comparateur d'assurance pour mettre en valeur le positionnement de sa solution d'assurance tant en prix, qu'en couverture. QAPE est à la recherche d'une solution sur-mesure dont le périmètre puisse évoluer dans le temps.

100M est la solution de choix pour communiquer efficacement sous un format engageant. 100M apporte la base logiciel, le savoir-faire technique et la connaissance des métiers de l'assurance; éléments primordiaux à la bonne et rapide exécution du projet. 

**L'objectif de ce projet est de développer un comparateur d'assurance qui puisse être mis à disposition du public et des conseillers, et servir de canal d'acquisition client.**

---

# Vos Objectifs
L'initiative conjointe de QAPE et de 100M s'articule autours de 3 objectifs: positionner les produits QAPE, apporter un conseil de qualité et créer un vecteur d'acquisition de parts de marché.

## Positionner les produits QAPE 
Le comparateur doit permettre de positionner clairement l'offre de QAPE par rapport aux offres existantes. La comparaison requiert la constitution d'une base de données de contrat d'assurance.

## Renforcer La Dimension Conseil
QAPE souhaite allier l'__instantanéité__ du conseil d'un robo-advisor à la __réassurance__ du dialogue avec un conseiller. L'application doit donc proposer une expérience fluide et faire remonter les informations auprès d'un conseiller qui pourra ensuite rentrer en relation avec son client.

## Augmenter l'Acquisition Client
Les outils développés dans le cadre du présent projet ont pour but d'être un vecteur d'acquisition client: à la fois dans une perspective de __conversion online__, que dans une perspective de __conversion offline__.

---

# Notre Analyse Des Enjeux
En terme de réalisation, le projet se décompose en 3 grandes composantes: la donnée, le moteur d'interview, et le moteur de comparaison.

## La Donnée
**Long Terme:** L'enjeu est ici de constituer, ou d'acquérir une base de données de contrats d'assurance, et de la maintenir à jour.  
**Pour Commencer:** Nous vous proposons de commencer à travailler sur une base de donnée limitée, maintenue à jour par QAPE.
 
## Le Moteur d'Interview
La seconde composante du projet est la construction d'un moteur d'interview paramétrable. Le moteur doit être capable d'adapter les questions en fonction des réponses précédemment fournies.   
**Long Terme:** En plus de l'interface Client, il comportera une interface Administrateur qui permettra de changer la séquence de questions et les liens logiques entre les questions.  
**Pour Commencer:** Nous vous proposons de paramétrer le questionnaire Client dans le code de l'application.

## Le Moteur de Comparaison
Le moteur de comparaison est constitué d'un ensemble de règles de gestion qui doit permettre de générer des scores et des classements.
Les scores sont générées sur la base des informations transmises par le moteur de questions.  
**Long Terme:** Le moteur de conseil comportera une interface Administrateur qui permettra la paramétrisation du modèle de comparaison.  
**Pour Commencer:** Nous vous proposons de paramétrer la logique de Conseil directement dans le code de l'application.

---

# Mise en Oeuvre

## 1. Éprouver la solution
Nous vous proposons de créer une application P.O.C. et de se concentrer sur un périmètre restreint, à savoir:
* une interview robot d'une dizaine de questions conclue par un bilan,
* avec quelques sliders d'ajustement qui permettent de créer des scénarios,
* permettant une comparaison avec des contrats stockés dans une base éditable dans une Google Sheet.

## 2. Industrialiser la solution
A cette occasion: 
* on enrichira la base de donnée de contrats, 
* on étoffera l'interview robot, 
* on complexifiera le moteur de comparaison,
* on créera des interfaces pour paramétrer le moteur d'interview, pour paramétrer le moteur de comparaison et pour mettre à jour la base de contrats.

## 3. Élargir à d'autres produits
Dans un troisième temps, on pourra étendre l'approche à d'autres produits d'assurance.

---

# La Solution 100M
100M a développé une plate-forme permettant la __déclinaison d'applications customisables__ pour nos clients.

Nous sommes des spécialistes du chiffre et de la vulgarisation des concepts financiers. Nos applications ont le plus souvent vocation à supporter une relation commerciale.

## L'expertise 100M
### Expérience Utilisateur
Nos applications facilitent une __lecture graphique, rapide et synthétique__ de l'information.  
100M a développé une bibliothèque de représentations graphiques qui savent mettre en confiance, favoriser la transparence du chiffre et communiquer une information aussi technique soit-elle.

### Collaboration
Nos solutions sont directement __connectées__ aux données tierces via une intégration simplifiée au maximum.   
La solution 100M comporte des modules de collaboration innovants afin d'éliminer toute friction dans la communication entre utilisateurs (ex: entre conseiller et client). Le partage d'écran et la création collaborative de contenu en sont des exemples.

### Cross-Platform
Les applications 100M sont conçues pour une __utilisation complètement mobile__ et sont compatibles desktop, tablette et smart phone.  
Notre plateforme est également multi-format: nos applications permettent l'export de rapports PDF ou d'email de synthèse en conclusion d'une discussion client.

---

## La Technologie 100M
### Le Front-End
100M a développé le front-end software propriétaire en Javascript permettant la réactivité de l'application et des graphiques, la synchronisation en temps réel avec une base de données, et avec les écrans d'autres utilisateurs.

### Les moteurs de calculs en Back-End
100M a développé un back-end en Python permettant d'effectuer le traitement de la donnée et le calcul des différents indicateurs.

### Hébergement de l'application
L'hébergement du front-end de l'application se fait sur des serveurs AWS dont le taux de disponibilité est garanti à 99.99%.

Les applications qui nécessitent une importante puissance de calcul sont hébergées sur un serveur dédié (4CPU, 7.5GB of RAM - c4.xlarge).

Pour des questions d'encapsulation et de sécurité, notre API est hébergée sur AWS Lambda (2CPU, 1GB of RAM, 500MB SDD).

### Hébergement des bases de données
Les databases sont hébergées sur un serveur dédié et optimisé (4CPU, 30GB of RAM, 80GB SDD - r3.xlarge avec postgresql sur Aurora).

---
# Le Projet
## Phase Proof-Of-Concept:  Comparateur 'Simplifié' d'Assurance 

L'objectif de cette première phase est double: présenter une première version fonctionnelle de l'application et poser les principales fondations techniques.  

## L'application livrée
Le livrable sera une application en ligne, personnalisée et accordée avec la charte graphique de QAPE.

L'application sera compatible Tablette, Desktop et Mobile et fonctionnera sous Chrome (versions 33 et suivantes), Safari (versions 8 et suivantes), FireFox (version 40 et suivantes) et Internet Explorer (11 et suivantes).

Le livrable sera constitué de:
* une application Client qui conduira l'interview robot.  
L'application invitera le client à comparer les offres des différents compétiteurs en fonction de ses __besoins propres__. La comparaison entre les différentes offres se mettra à jour __en temps réel__ au fur et à mesure que le client donne de l'information sur son profil d'utilisation.  

* l'application sera connectée à une base de données de contrats d'assurance mise en ligne dans une Google Sheet.

L'application Client pourra être mise à disposition du public et servir de canal d'acquisition client.

## Séquençage:  
1. recueil des informations sur les questions de l'interview Client, le modèle de pricing et le modèle de scoring.  

2. design de l'application Client.  
__Livraison de l'UI/UX application Client.__

3. développement du back-end.

4. tests et mise en ligne.  
__Livraison de l'application__

## QAPE aura à charge de
* établir la liste de questions à poser au Client ou, à défaut, de fournir une segmentation Client.
* fournir le modèle de pricing au format demandé.
* fournir la liste des situations que le moteur de comparaison doit examiner.
* donner feedbacks et commentaires sur les rendus.  

## 100M aura à charge de
* établir les différents parcours de l'interview Client et/ou la liste des questions,
* proposer une interface client, 
* définir les règles de gestion du moteur de comparaison,
* mettre à disposition en ligne, et protégée par mot de passe l'application prototype.  

### Planning de livraison
L'application sera livrée dans un délai de 2 semaines à compter de la date de l'accord client.  

---

# Le Budget
## Les développements spécifiques
100M met à disposition son équipe de développeurs front-end, ses data scientists et ses chefs de projets pour conseiller QAPE et pour effectuer les développements spécifiques nécessaires.

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
![](/extra/qape.png)

## La licence
La licence couvre le droit d’utilisation du progiciel et de ses développements spécifiques pour QAPE, 24h/24 et 7j/7.

La licence inclut également la maintenance corrective et évolutive, en particulier pour garantir la continuité du service lors des mises à jour des plateformes tierces (OS) ou navigateurs utilisés, la mise à jour effective de ces changements pour la configuration du progiciel et le support téléphonique.

Afin de permettre une large diffusion de nos applications et de faciliter la collaboration, la licence est chiffrée uniquement "à l'application" et non pas à l'utilisateur.

La licence pour l'application 'proof-of-concept' est de 600 Euros / mois, hébergement inclus.

Les prix sont valables pour un engagement de 6 mois renouvelables.

## Conditions De Paiement
Le paiement se fait en deux fois pour la partie intégration : 50% à la commande, 50% à la livraison.

Le paiement se fait par trimestre, en début de trimestre à émission de la facture par 100M pour la licence.  

---

# L'équipe dirigeante

### Clément Miglietti - Directeur Général
Avant de créer 100M, Clément a passé 10 ans dans la Finance à New York, Londres et Paris en tant que Directeur de la Recherche Quantitative (Crédit) chez BNP Paribas, puis Gérant chez Blue Mountain Capital.

Clément est diplômé de l’École Polytechnique, et membre du Corps des Ponts et Chaussées (X-Ponts).

### Valentin Brajon - Directeur Technique.
Avant de créer 100M, Valentin a développé des solutions Web pendant 9 ans.
Il a été l'Architecte et le Développeur Web de nombreuses plate-formes financières et notamment de celle de Parvest.

Valentin est ingénieur informatique diplômé de Sciences U.

---

## Votre Contact:
# clement@100m.io
