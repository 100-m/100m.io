<div style="margin-bottom: 140px;">
  <img src="/extra/background.png"/>
  <img src="/extra/logo.png" style="position: absolute;top: 50%;left: 50px;width: 100px;" />
  <h1 style="-webkit-print-color-adjust: exact;position: absolute;top: 40%;left: 50px;color: rgba(255, 255, 255, 1);">Extranet</h1>
</div>

# Tikehau Capital

---

# Introduction
Tikehau Capital souhaite créer un extranet qu'il va ouvrir à ses clients. Le but est de pouvoir mettre à disposition de ces derniers les informations et documents essentiels relatifs à leurs investissements avec la société.

LES ENJEUX

100M
100M propose une solution de reporting flexible et au format engageant. 100M est spécialisé dans le domaine de l'investissement. La solution 100M inclut des composants pouvant être embarqués individuellement et simplement sur un site internet ou extranet.

LE PROJET.

---

# Les Enjeux
L'initiative conjointe de Tikehau Capital et de 100M fait apparaître 4 enjeux: l'**expérience client**, la **facilité de l'intégration**, la **flexibilité** de la solution et la **sécurité**. 


## Expérience Client  
L'expérience client doit être fluide: l'information doit être facilement lisible, les composants graphiques doivent inviter l'utilisateur à interagir, et les documents doivent être facilement accessibles et téléchargeables.  
Les interfaces doivent être pensées pour la mobilité et compatibles sur les supports desktop, téléphone, tablette et ainsi qu'entre les différents navigateurs web.  

## Facilité de l'intégration avec Tikehau
L'enjeu est ici de simplifier l'intégration au maximum: Tikehau utilise Sophis et Efront pour gérer ses positions. Il s'agit de pouvoir s'interfacer simplement avec ces logiciels, ou avec les bases de données existantes chez Tikehau.  
Les données doivent pouvoir être mise-à-jour aussi bien 'par batch', qu'individuellement. La mise à jour doit pouvoir être faites par le 'Client Services' ou par les équipes I.T.

## Flexibilité
L'extranet est destiné à évoluer et à être enrichi dans le temps.
Tikehau envisage également une refonte de sa charte graphique.
L'application livrée doit pouvoir offrir la souplesse nécessaire pour s'adapter à ces changements et évolutions à moindre coût.

## Sécurité  
L'information publiée au sein de l'extranet est confidentielle et doit être sécurisée par une double authentification.  
Les protocoles d'échange d'information et de transfert de données doivent respecter les derniers standards de sécurité. 

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

---

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

Le projet consiste à développer un extranet dont la finalité principale est de permettre aux clients d'avoir une vision consolidée de leurs investissements chez Tikehau, et d'accéder aux documents afférents.  

La structure de l'application doit rester simple, flexible et évolutive.

Nous allons procéder en mode *agile* et nous vous proposons d'articuler le projet en 2 étapes: une phase de **pré-production** et une phase de mise en **production**.

Le but de la phase de pré-production est de:
- finaliser le design de l'application, 
- finaliser les fonctionnalités métier,
- spécifier un mode et format d'échange des données et des fichiers entre l'application et les systèmes Tikehau,
- tester l'application sur une dizaine d'utilisateurs représentatifs,
- mettre en place un processus mensuel de mise à jour des données,
- mettre en place un processus de mise à jour 'on demand' des données.

Le but de la phase de production sera de:
- déployer l'application sur l'ensemble des utilisateurs,
- automatiser une mise à jour quotidienne des données.

## Livrable
100M livrera une application extranet sécurisée, compatible au format tablette / mobile / desktop et fonctionnant avec Chrome (version 33 et suivantes), Safari (version 8 et suivantes), Mozilla (version 40 et suivantes) et Internet Explorer (version 11 et suivantes).

L'application comprendra pour chaque client, 
- une page de synthèse des investissements,
- un espace où retrouver les documents relatifs aux investissements.

L'application comprendra pour chaque commercial, 
- un page listant ses clients et permettant d'accéder à leur espace.

**Un prototype est en ligne [ici](https://tikehau.100m.io).**

## 100M aura à charge
- de concevoir les différentes pages en collaboration avec les équipes Tikehau,
- d'adapter les écrans à un usage mobile (tablette et téléphone),
- de développer les connecteurs aux données Tikehau,
- de mettre en-ligne l'extranet sécurisé.

## Tikehau aura à charge
- de valider les écrans proposés par l'équipe de 100M,
- d'extraire les données clients des systemes Tikehau (Sophis, Efront etc.) sous forme de fichiers plats dans un format pré-établi.

## Planning de livraison
**L'extranet sera livré dans un délai de 6 semaines, à compter de la date d'accord de Tikehau.**

---

# Le Budget

## La licence
### Description de la Solution 100M
Les applications de reporting connecté 100M servent de support au suivi et à la commercialisation des produits d'investissement.

Elles permettent aux différentes équipes des sociétés de gestion et aux clients de collaborer au sein d'une même plateforme.

Nativement, les applications 100M permettent de:
- Visualiser des indicateurs et des données quantitatives.
- Interagir avec les graphiques.
- Synchroniser la donnée des rapports avec des sources externes.
- Fiabiliser la donnée par des mécanismes de vérification et de caching adaptés.

*Sont inclus* dans le pricing de la solution:
- _Un nombre d'utilisateurs illimité_
- _L'hébergement des serveurs web_

**La licence pour l'extranet Tikehau est de 850 Euros / mois.**  
Les prix sont valables pour un engagement de 12 mois.

---

##  Les développements spécifiques
100M met à disposition son équipe de développeurs front-end, ses quant's et ses chefs de projet pour conseiller Tikehau et pour effectuer les développements spécifiques nécessaires.

Les développements spécifiques comprennent, à titre d'exemple:
* la customisation de la solution,
* l'intégration aux systèmes Client,
* le travail spécifique sur les données.
Les développements se feront en cycles *Agiles* en partenariat avec Tikehau.  

Les développements sont facturés sur une base Jour Homme aux tarifs suivants:
- Développeur junior: 450 Euros / Jour.
- Développeur senior: 700 Euros / Jour.
- Data Scientist: 800 Euros / Jour.
- Analyste Quantitatif Senior: 800 Euros / Jour.
- Chef de Projet: 800 Euros / Jour.
- Graphiste: 500 Euros / Jour.

Le coût des **développements spécifiques** pour adapter la solution aux besoins de Tikehau et l'intégrer aux systèmes de la société sont estimés à **23,900 Euros.**

### Chiffrage détaillé de la phase Pre-Production
![](/extra/tikehau-preprod.png)

---

## Les Conditions
### Utilisation
La licence couvre le droit d’utilisation du progiciel et de ses développements spécifiques pour Tikehau, 24h/24 et 7j/7

La licence inclut également la maintenance corrective et évolutive, en particulier pour garantir la continuité du service lors des mises à jour des plateformes tierces (OS) ou navigateurs utilisés, la mise à jour effective de ces changements pour la configuration Tikehau et le support téléphonique.


### Paiement
Le paiement des développements spécifiques se fait en deux fois: 50% à la commande, 50% à la livraison.

Le paiement de la license se fait par trimestre, en début de trimestre à émission de la facture par 100M.  

Les termes de cette proposition restent valables jusqu’au 22 Mai 2017.

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
