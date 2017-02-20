<div style="margin-bottom: 140px;">
  <img src="/extra/background.png"/>
  <img src="/extra/logo.png" style="position: absolute;top: 50%;left: 50px;width: 100px;" />
  <h1 style="-webkit-print-color-adjust: exact;position: absolute;top: 40%;left: 50px;color: rgba(255, 255, 255, 1);">Data Visualisation</h1>
</div>

# Société Générale

---

# Introduction
Société Générale cherche une solution de data visualisation qui lui permette de traiter l’information de manière interactive sur sa clientèle de contreparties.

L'équipe de modélisation du risque de crédit souhaite une solution flexible et évolutive pour travailler sur ses données, effectuer des calculs statistiques, des benchmarking et les partager avec les parties prenantes de l'entreprise.

100M est la solution de choix pour analyser la donnée et collaborer efficacement sous un format engageant. 100M apporte le logiciel, le savoir-faire technique et la connaissance des métiers du risque; éléments primordiaux à la bonne et rapide exécution du projet.

L'objectif est de développer un outil facilement intégrable, dont le design, les fonctionalités et l'ergonomie augmentent la productivité du travail d'analyse, en facilitent la diffusion et son impact.

---

# Notre compréhension de vos Objectifs
L'initiative conjointe de la Société Générale et de 100M s'articule autour des 3 objectifs: Analyser, Engager, et Collaborer.

## Analyser
Un des objectifs primordiaux est de faciliter l'analyse de la donnée, et dans le présent cas d'usage, la modélisation du risque de crédit.  
L'équipe souhaite pouvoir construire très facilement des indicateurs statistiques et produire des graphiques qui facilitent l'exploration de la donnée, notamment via du 'drill-down'.

## Engager
L'équipe de modélisation souhaite pouvoir communiquer sur la modélisation sous un format attrayant et faciliter la discussion autour des modèles.
Pour maximiser l'engagement, elle souhaite déployer une solution connectée, interactive et compatible sur des supports tactiles.

## Collaborer
La collaboration est un enjeu et la solution doit permettre de co-produire un travail, de le partager librement et d'en exposer les résultats facilement lors de présentation.

---

# L'Application
100M a developpé une plateforme en-ligne de data visualisation.

## La Solution
### Visualisation & Exploration
L'application facilite une lecture visuelle rapide et synthétique du portefeuille de risques.

La possibilité d'effectuer un 'drill-down' dans les aggrégats permet une analyse par poche de risque selon les indicateurs choisis.

### Connexion & Collaboration
En plus d'être directement connectée aux données, l'application 100M comporte des fonctionalités de collaboration innovantes. Le partage d'écran et l'édition de contenu collaborative permettent de gagner en productivité et en agilité.

La solution permet également de transformer une analyse en 'rapport régulier' et de réduire les couts associés au reporting de 75%, tout en augmentant la qualité du contenu.

Le modèle de facturation à "l'application" et non pas à "l'utilisateur" permet une diffusion non-restreinte des dashboards.

### Flexibilité
L'application 100M est concue pour supporter une utilisation complètement mobile, tactile et est compatible desktop, tablette et smart phone.   

Elle est également multi-format et permet l'export de rapports PDF. 

La solution 100M est flexible et permet l'ajout de visualisation customs et l'intégration de fonction de calcul customs également.  


---

## La Technologie
### Le Front-End
100M a developpé le front-end software propriétaire en Javascript permettant la reactivité de l'application et des graphiques, la synchronisation en temps réel avec une base de donnée, et avec les écrans d'autres utilisateurs.

### Les moteurs de calculs en Back-End
100M a developpé un back-end en Python permettant d'effectuer le traitement de la donnée, le calcul des differents indicateurs et une contribution de performance.

### Hébergement 
#### On-Premise
100M offre également la possibilité à ses clients d'héberger l'application et les bases de données On-Premise. 

#### Cloud
L'alternative à l'hébergement On-Premise est l'hébergement Cloud.

L'hébergement du front-end de l'application se fait sur des serveurs AWS dont le taux de disponibilité est garanti à 99.99%.

Les applications qui nécessitent une importante puissance de calcul sont hébergées sur un serveur dédié (4CPU, 7.5GB of RAM - c4.xlarge).

Pour des questions d'encapsulation et de sécurité, notre API est hébergée sur AWS Lambda (2CPU, 1GB of RAM, 500MB SDD).

Les databases sont hébergées sur un serveur dédié et optimisé (4CPU, 30GB of RAM, 80GB SDD - r3.xlarge avec postgresql sur Aurora).


## Quelques exemples clients
100m est en croissance rapide et notre solution a été adoptée par des sociétés des Banques, des sociétés d'Asset Management, et des Fintechs et des laboratoires de Recherche.

1. Un gros acteur financier a adopté la solution 100M pour visualiser et explorer les risques de son portefeuille.
!["Drill-Down Risks"](/extra/drilldown.gif)

2. Un gros Hedge Fund New Yorkais cherchait une solution de dataviz pour analyser visuellement la relation entre actifs financiers.
!["Serie Temporelle"](/extra/series.gif)

3. Le laboratoire de recherche qui exploite la plus grande base de données Santé au monde à decidé de s'équiper de la solution 100M pour manipuler intéractivement la donnée.
!["Manipulation Interactive"](/extra/explorer.gif)

---

# Le Projet: Projet Proof Of Concept
L'objectif de la phase de Proof Of Concept est de développer une application adaptée à un premier cas d'usage concret.  

*Le cas d'usage qui a été identifié est celui de la construction d'un modèle, de l'évaluation de sa performance et du benchmarking d'un client spécifique.*

Dans un second temps, l'application pourra être déclinée sur d'autres cas d'usage ou étendue pour couvrir des cas d'usage génériques.

## Le livrable
Le livrable sera une application en ligne interactive.

L'application va permettre d'évaluer le pouvoir prédictif d'une variable, de définir un modèle, d'évaluer sa performance et finalement de benchmarker un client contre un indicateur crée au sein de l'application.

De manière abstraite, l'application donne la possibilité:
* de définir et calculer des mesures (i.e. de ‘reduce function’) via une fonction inputée par l'utilisateur dans l'interface.
* de choisir les indicateurs et variables à afficher.
* de définir un périmètre (i.e. ‘record filter’) d’analyse.
* de définir le type de ‘chart’ à afficher.
* de voir les données d'un groupe de clients (ou de 'records').
* d’afficher les details d’un client (i.e. de 'records').

L'application 100M sera personnalisée et accordée avec la charte graphique de la Société Générale.

L'application sera compatible Tablette, Desktop et Mobile et fonctionnera sous Chrome (versions 33 et suivantes), Safari (versions 8 et suivantes), FireFox (version 40 et suivantes) et Internet Explorer (11 et suivante).

Dans la phase de Proof of Concept, la connexion au donnée se fera via un upload simple.

## 100M aura à charge
* de concevoir le parcours utilisateur et les écrans,
* de customiser le progiciel et d'adapter les graphiques,
* de mettre à disposition en ligne, et protégée par mot de passe l'application Proof Of Concept.

## La Société Générale aura à charge
* de fournir un fichier model du format de données,
* la validation des écrans et du parcours utilisateur.

## Planning de livraison
L'application sera livrée dans un délai de 6 semaines à compter de l'accord client.

---
# Le Budget
##  Les développements spécifiques
100M met à disposition son équipe de développeurs front-end, ses quant's et ses chefs de projets pour conseiller la Société Générale et pour effectuer les développements spécifiques nécessaires.

Les développements se font en cycles *Agiles* en partenariat avec le client.  

Les développements sont facturés sur une base Jour Homme aux tarifs suivants:

- Développeur junior: 550 Euros / Jour.
- Développeur senior: 800 Euros / Jour.
- Data Scientist: 850 Euros / Jour.
- Analyste Quantitatif Senior: 990 Euros / Jour.
- Chef de Projet: 800 Euros / Jour.
- Graphiste: 600 Euros / Jour.

Le détail du chiffrage de la phase de Proof Of Concept est presenté ci-dessous.

---

## La license
### Description de le Solution 100M
L'application de reporting connecté 100M sert de support au suivi et à la commercialisation des produits d'investissement.

Elle permet aux équipes de gestion, de risques et des relations investisseurs de collaborer au sein d'une même plateforme.

Nativement, l'application 100M permet de:
- Visualiser les risques, les performances et les indicateurs 'user-defined' d'un portefeuille.
- 'Drill-down' dans les données et les positions jusqu'au ligne à ligne.
- Comparer un indicateur avec un benchmark sur un périmètre donné.
- Effectuer des présentations à distance en utilisant la synchronisation d'écran intégrée.
- Sécuriser le contenu par un mécanisme d'authentification.
- Synchroniser la donnée une base de donnée interne.

L'application est interactive et compatible au format tablette / mobile / desktop et fonctionne avec Chrome (version 33 et suivantes), Safari (version 8 et suivantes), Mozilla (version 40 et suivantes) et Internet Explorer (11 et suivantes).

*Sont inclus* dans le pricing de la solution:
- __Un nombre d'utilisateurs illimités__
- _La gestion des droits d'accès et profils utilisateurs_
- _L'hébergement des serveurs de calcul_
- _L'hébergement de la base de données_

La license pour le projet de Proof Of Concept sera de 800 Euros / mois.

### Les conditions
La license couvre le droit d’utilisation du progiciel et de ses développements spécifiques pour la Société Générale, 24h/24 et 7j/7

La license inclue également la maintenance corrective et évolutive, en particulier pour garantir la continuité du service lors des mises à jour des plateformes tierces (OS) ou navigateurs utilisés, la mise à jour effective de ces changements pour la configuration de la Société Générale du progiciel et le support téléphonique.

Afin de permettre une large diffusion et de faciliter la collaboration, la license est chiffrée uniquement sur la base du nombre de documents créés et comprend un accès pour un nombre illimités d'utilisateurs.


## Conditions De Paiement
Le paiement se fait en deux fois pour la partie intégration : 50% à la commande, 50% à la livraison.

Le paiement se fait par trimestre, en début de trimestre à émission de la facture par 100M pour la license.  

Les termes de cette proposition restent valables jusqu’au 1 Avril 2017.

---

## Chiffrage de la Phase de Prototypage 

![](/extra/socgen-chiffrage.png)

---

# L'équipe dirigeante

### Clément Miglietti - Directeur Général
Avant de créer 100M, Clément a passé 10 ans dans la Finance à New York, Londres et Paris en tant que Directeur de la Recherche Quantitative Crédit chez BNP Paribas, puis Gérant chez Blue Mountain Capital.

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
