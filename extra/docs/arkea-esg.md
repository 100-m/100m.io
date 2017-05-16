<div style="margin-bottom: 140px;">
  <img src="/extra/background.png"/>
  <img src="/extra/logo.png" style="position: absolute;top: 50%;left: 50px;width: 100px;" />
  <h1 style="-webkit-print-color-adjust: exact;position: absolute;top: 40%;left: 50px;color: rgba(255, 255, 255, 1);">Reporting ESG / ISR</h1>
</div>

# Arkea Investment Solutions

---

# Introduction
**Le reporting des métriques extra-financière représente un enjeu qui ira croissant**, notamment avec la future entrée en vigueur de la loi sur la transition energétique. Aujourd'hui, Arkéa IS dispose d'une infrastructure de reporting sur les sujets ESG/ISR, des sources de données afférentes, ainsi que de son propre moteur de calcul. 

Nous avons compris que vous souhaitez développer plus-avant la capacité à communiquer efficacement et largement sur les aspects extra-financiers pour **donner au client final une meilleure vision de ces métriques**. En particulier, vous souhaitez **lui permettre d'aller d'une vision globale à une vision granulaire au sein d'un portefeuille.**

100M est une solution de reporting et de datavisualisation analytique. 100M livre des applications sur-mesure et clef-en-main pour communiquer efficacement sous un format engageant. L'équipe de 100M combine un savoir-faire technique et une connaissance profonde des métiers de l'investissement.

Ensemble **nous vous proposons dans un premier temps de digitaliser le rapport de gestion mensuel des fonds ESG/ISR, en dédiant une attention toute particulière à la composante extra-financière.**  
Dans un deuxième temps, nous pourrons travailler sur les rapports ESG/ISR semestriels. 

---

# Les Enjeux
L'initiative conjointe d'Arkéa IS et de 100M fait apparaître 3 grands enjeux: l'**expérience client**, la **granularité de l'analyse**, la capacité à **intégrer et automatiser facilement** la création du reporting.

## Expérience client
Arkéa IS souhaite expliquer le positionnement de sa gestion, en mettre en avant la qualité, mais également inviter le client à s'intéresser aux données extra-financières.  
Pour maximiser l'engagement, Arkéa IS souhaite déployer un reporting connecté fluide, lisible, avec des composants graphiques invitant à l'intéraction. Les interfaces doivent être pensées pour la mobilité et compatibles sur les supports desktop, téléphone, tablette et ainsi qu'entre les différents navigateurs web.  

## Granularité de l'analyse
Le but est de permettre au client de s'approprier la donnée en adoptant une démarche exploratoire. La visualisation des rapports doit lui permettre d'avoir une vision 'haut niveau' mais également d'analyser plus en profondeur le portefeuille via des animations de type 'drill-down'.

## Intégration et Automatisation
L'enjeu est ici de simplifier l'intégration au maximum et de gagner en productivité en automatisant la génération des rapports. La solution 100M doit pouvoir se connecter facilement aux sources de données Arkea IS. Les données doivent pouvoir être mises à jour aussi bien 'par batch', qu'individuellement. 

---

# La Solution 100M
100M a développé une solution de marketing et reporting en-ligne dédiée aux Asset Managers. 
La solution 100M permet le développement d'applications sur-mesure.

## Nos applications
### Exploration Visuelle
Les applications développées par 100M facilitent une lecture visuelle rapide et synthétique de l'information.   
Elles comportent des visualisations interactives qui permettent d'analyser la donnée avec facilité et fluidité.  
Elles sont complètement flexibles et customisables selon les besoins clients.

### Collaboration
En plus d'être directement connectées aux données, les applications 100M peuvent intégrer des fonctionalités de collaboration innovantes. Le partage de contenu, le partage d'écran permettent de gagner en productivité et en agilité.  
La solution permet une réduction des coûts associés au reporting de l'ordre de 75%, tout en augmentant la qualité du service.

### Cross-Platform
Les applications 100M sont conçues pour une utilisation complètement mobile et sont compatibles desktop, tablette et smart phone.
Elles sont également multi-format et permettent l'export de rapports PDF. Les formats des rapports sont définis par le biais de templates customisables.

## La Technologie
### Le Front-End
100M a développé le front-end software propriétaire en Javascript permettant la réactivité de l'application et des graphiques, la synchronisation en temps réel avec une base de données, et avec les écrans d'autres utilisateurs.

### Les moteurs de calcul en Back-End
100M a développé un back-end en Python permettant d'effectuer le traitement de la donnée et le calcul des différents indicateurs.

### Hébergement de l'application
L'hébergement du front-end de l'application se fait sur des serveurs AWS dont le taux de disponibilité est garanti à 99.99%.

Les applications qui nécessitent une importante puissance de calcul sont hébergées sur un serveur dédié (4CPU, 7.5GB of RAM - c4.xlarge).

Pour des questions d'encapsulation et de sécurité, notre API est hébergée sur AWS Lambda (2CPU, 1GB of RAM, 500MB SDD).

### Hébergement base de données
Les databases sont hébergées sur un serveur dédié et optimisé (4CPU, 30GB of RAM, 80GB SDD - r3.xlarge avec postgresql sur Aurora).

---

# Le Projet

Nous vous proposons de digitaliser les rapports de gestion sur les fonds ISR et ESG, **en tirant parti du modèle Schelcher Prince** et **en l'augmentant d'une section dédiée aux aspects extra-financiers.**

Nous allons procéder en mode *agile* et nous vous proposons d'articuler le projet en 2 étapes: une phase de **pré-production** où nous allons adapter le template et ajouter les éléments manquants et une phase de mise en **production** où nous connecterons l'application aux systèmes Arkéa IS.

En détails, le but de la phase de pré-production est de:
- finaliser le **design** de l'application, 
- finaliser les **fonctionnalités** métier,
- spécifier un mode et **format d'échange des données** et des fichiers entre l'application et les systèmes Arkéa,
- **tester l'application** sur un fonds représentatif,
- mettre en place un processus de mise à jour des données sur la base d'un fichier 'plat'.

En détails, le but de la phase de production sera de:
- **automatiser la mise-à-jour** des données,
- **déployer** l'application sur une gamme plus large de fonds.

## Livrable
100M livrera une application  sécurisée, compatible au format tablette / mobile / desktop et fonctionnant avec Chrome (version 33 et suivantes), Safari (version 8 et suivantes), Mozilla (version 40 et suivantes) et Internet Explorer (version 11 et suivantes).

**L'application sera mise en accord avec la charte graphique d'Arkéa IS.**

L'application comprendra pour chaque fonds, 
- un écran de synthèse,
- un écran incluant le commentaire de gestion et les principaux mouvements du portefeuille,
- un écran d'analyse de la performance,
- un écran présentant le positionnement du portefeuille,
- **un écran présentant les charactéristiques ESG / ISR du portefeuille.**

L'écran ESG / ISR reprendra les informations présentées par le reporting existant ou incluera les informations mentionnées en annexe.

## 100M aura à charge
- de concevoir les différentes écran en collaboration avec les équipes Arkéa,
- d'adapter les écrans à un usage mobile (tablette),
- de concevoir le data model,
- de concevoir un mécanisme de mise-à-jour de la donnée.

## Arkéa aura à charge
- de valider les écrans proposés par l'équipe de 100M,
- de fournir les données brutes requises pour la conception du rapport.

## Planning de livraison
**L'application sera livrée dans un délai de 6 semaines, à compter de la date d'accord d'Arkéa.**

---

# Le Budget

## La licence
### Description de la Solution 100M
Les applications de reporting connecté 100M servent de support au suivi et à la commercialisation des produits d'investissement. Elles permettent également aux différentes équipes des sociétés de gestion et aux clients de collaborer au sein d'une même plateforme.

*Sont inclus* dans le pricing de la solution:
- _Un nombre d'utilisateurs illimité_
- _L'hébergement des serveurs web_

Les prix de la licence sont ceux fixés par notre accord cadre disponible [ici](/md.html?schelcher.md).

##  Les développements spécifiques
100M met à disposition son équipe de développeurs front-end, ses quant's et ses chefs de projet pour conseiller Arkéa et pour effectuer les développements spécifiques nécessaires.

Les développements sont facturés sur une base Jour Homme aux tarifs prévus dans notre accord cadre.

Le coût des **développements spécifiques** pour adapter la solution aux besoins des fonds ISG / ESR d'Arkéa est estimé à **15,100 Euros.**

### Chiffrage détaillé de la phase Pre-Production
![](/extra/arkea-esg.png)

## Les Conditions
### Utilisation
La licence couvre le droit d’utilisation du progiciel et de ses développements spécifiques pour Arkea IS, 24h/24 et 7j/7

La licence inclut également la maintenance corrective et évolutive, en particulier pour garantir la continuité du service lors des mises à jour des plateformes tierces (OS) ou navigateurs utilisés, la mise à jour effective de ces changements pour la configuration Arkea et le support téléphonique.


### Paiement
Le paiement des développements spécifiques se fait en deux fois: 50% à la commande, 50% à la livraison.

Le paiement de la license se fait par trimestre, en début de trimestre à émission de la facture par 100M.  

Les termes de cette proposition restent valables jusqu’au 15 Juin 2017.

---

# L'équipe dirigeante

### Clément Miglietti - Directeur Général
Avant de créer 100M, Clément a passé 10 ans dans la Finance à New York, Londres et Paris en tant que Directeur de la Recherche Quantitative (Crédit) chez BNP Paribas, puis Gérant chez Blue Mountain Capital.

Clément est diplômé de l'Ecole Polytechnique, et membre du Corps des Ponts et Chaussées (X-Ponts).

[Profil LinkedIn](https://fr.linkedin.com/in/clement-miglietti-05a3203)

### Valentin Brajon - Directeur Technique.
Avant de créer 100M, Valentin a développé des solutions Web pendant 9 ans.
Il a été l'Architecte et le Développeur Web de nombreuses plateformes financières et notamment de celle de Parvest.

Valentin est ingénieur informatique diplômé de Sciences U.

[Profil LinkedIn](https://fr.linkedin.com/in/vbrajon/en)

---

## Votre Contact:
# clement@100m.io

---

# Annexe : Reporting de performance ESG

Détermination des indicateurs à calculer pour chacun des fonds
A ce jour 9 ensembles d’indicateurs existent, en fonction de la typologie du fonds.

## Ensemble 1 : Fonds majoritairement investi dans des sociétés françaises
-	Indicateur 1 : Emissions de CO2 (corpo)
-	Indicateur 2 : Engagement à la préservation des ressources
-	Indicateur 3 : Croissance des effectifs
-	Indicateur 4 : Signataires du Pacte Mondial
-	Indicateur 5 : Part des effectifs en CDI
-	Indicateur 6 : Taux d’indépendance du conseil
-	Indicateur 7 : Taux de féminisation du conseil

## Ensemble 2 : Fonds majoritairement investi dans des sociétés Monde et France
-	Indicateur 1 : Emissions de CO2 (corpo)
-	Indicateur 2 : Engagement à la préservation des ressources
-	Indicateur 3 : Croissance des effectifs
-	Indicateur 4 : Signataires du Pacte Mondial
-	Indicateur 6 : Taux d’indépendance du conseil
-	Indicateur 7 : Taux de féminisation du conseil
	
## Ensemble 3 : Fonds majoritairement investis dans les Etats et significativement dans les entreprises monde
-	Indicateur 1 : Emissions de CO2 (Etats)
-	Indicateur 2 : part des énergies vertes dans le Mix énergétique national
-	Indicateur 3 : produits et services ayant un effet positif sur l’environnement
-	Indicateur 4 : Taux de chômage
-	Indicateur 5 : Indice de bien-être
-	Indicateur 6 : croissance des effectifs 
-	Indicateur 7 : Indice de gouvernance
-	Indicateur 8 : Taux d’indépendance du conseil

## Ensemble 4 : Fonds majoritairement investi dans les entreprises Monde et significativement dans les  Etats
-	Indicateur 1 : Emissions de CO2 (corpo)
-	Indicateur 2 : part des énergies vertes dans le Mix énergétique national
-	Indicateur 3 : produits et services ayant un effet positif sur l’environnement
-	Indicateur 4 : Taux de chômage
-	Indicateur 5 : Pacte Mondial
-	Indicateur 6 : croissance des effectifs 
-	Indicateur 7 : Indice de gouvernance
-	Indicateur 8 : Taux d’indépendance du conseil

## Ensemble 5 : Fonds majoritairement investi dans les Etats et significativement dans les entreprises françaises
-	Indicateur 1 : Emissions de CO2 (Etats)
-	Indicateur 2 : part des énergies vertes dans le Mix énergétique national
-	Indicateur 3 : Engagement à la préservation des ressources
-	Indicateur 4 : Taux de chômage
-	Indicateur 5 : Indice de bien-être des populations
-	Indicateur 6 : croissance des effectifs 
-	Indicateur 7 : Indice de gouvernance
-	Indicateur 8 : Taux d’indépendance du conseil

## Ensemble 6 : Fonds majoritairement investi dans les entreprises françaises et significativement dans les Etats
-	Indicateur 1 : Emissions de CO2 (Corpo)
-	Indicateur 2 : part des énergies vertes dans le Mix énergétique national
-	Indicateur 3 : Engagement à la préservation des ressources
-	Indicateur 4 : Taux de chômage
-	Indicateur 5 : part des effectifs en CDI
-	Indicateur 6 : croissance des effectifs 
-	Indicateur 7 : Indice de gouvernance
-	Indicateur 8 : Taux d’indépendance du conseil 

## Ensemble 7 : Fonds majoritairement investi dans les Etats et significativement dans les entreprises françaises + monde
-	Indicateur 1 : Emissions de CO2 (Etats)
-	Indicateur 2 : part des énergies vertes dans le Mix énergétique national
-	Indicateur 3 : Engagement à la préservation des ressources
-	Indicateur 4 : Taux de chômage
-	Indicateur 5 : Indice de bien-être des populations
-	Indicateur 6 : croissance des effectifs (WW + FR)
-	Indicateur 7 : Indice de gouvernance
-	Indicateur 8 : Taux d’indépendance du conseil (WW + FR)

## Ensemble 8 : Fonds majoritairement investi dans les entreprises françaises + monde et significativement dans les Etats
-	Indicateur 1 : Emissions de CO2 (Corpo)
-	Indicateur 2 : part des énergies vertes dans le Mix énergétique national
-	Indicateur 3 : Engagement à la préservation des ressources
-	Indicateur 4 : Taux de chômage
-	Indicateur 5 : Indice de bien-être des populations
-	Indicateur 6 : croissance des effectifs 
-	Indicateur 7 : Indice de gouvernance
-	Indicateur 8 : Taux d’indépendance du conseil 

## Ensemble 9 : Fonds investis dans les Etats
-	Indicateur 1 : Emissions de CO2 (Etats)
-	Indicateur 2 : part des énergies vertes dans le Mix énergétique national
-	Indicateur 3 : part des zones protégées
-	Indicateur 4 : Taux de chômage
-	Indicateur 5 : Indice de bien-être des populations
-	Indicateur 6 : Indice PISA 
-	Indicateur 7 : Indice de gouvernance
-	Indicateur 8 : Part des femmes au parlement