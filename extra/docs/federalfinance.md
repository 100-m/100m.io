<div style="margin-bottom: 140px;">
  <img src="/extra/background.png"/>
  <img src="/extra/logo.png" style="position: absolute;top: 50%;left: 50px;width: 100px;" />
  <h1 style="-webkit-print-color-adjust: exact;position: absolute;top: 40%;left: 50px;color: rgba(255, 255, 255, 1);">Reporting OnDemand</h1>
</div>

# Arkea Investment Solutions

---

# Introduction
Dans le cadre de l'évolution de son site web, Fédéral Finance souhaite faire évoluer ses fiches fonds en ajoutant des graphiques dynamique de comparaison du fonds avec son index.

100M propose une solution de reporting et de communication au format engageant spécialisé dans le domaine de l'investissement. La solution 100M inclut des composants pouvant être embarqué individuellement et simplement sur un site internet ou intranet.

L'objectif est d'améliorer l'engagement clients en exposant les données de performance du fonds de manière simple et à jour.

---

# Le Projet
## Phase 1: Développement et déploiement d'un composant

Le composant de comparaison de performance doit être adapter pour correspondrent aux besoins de Fédéral Finance concernant les instruments suivant:
- Fonds Ouverts - FFG
- Fonds d'assurance - FAF
- Titres de créances - EMTN

Les titres de créances comportent le moins de fonctionnalités spécifiques et seront donc traiter dans cette première phase ayant pour objectif de :
- réaliser une intégration de bout-en-bout pour minimiser les risques d'industrialisation.
- faire le choix de la méthode d'intégration
- optimiser le rendu du composant (mobile + tablette + performances + affichage)

### 100M aura à charge
* de configurer et héberger sa solution
* de créer un connecteur API
* d'exporter un graphique de performance et de fournir la commande d'intégration

### Schelcher aura à charge
* de fournir les données via un webservice (API)
* d'intégrer le composant sur une page du site www.fédéral-finance.fr

### Planning de livraison
Le composant sera livrée fin Avril.

---

## Phase 2: Industrialisation pour tous les fonds
Reproduire pour 75 fiches fonds

---

Phase 1:
Connecteur Webservice FF - 1j
Install sur federal-finance.fr - 1j
Composants Embed - 3j
PDF Composant ou Page Embarqué - 2j
Mobile + Tablette - 2j
MAJ Line Chart: Dates + Tooltip + Légende + Watermark - 1j

Total: 10j

Phase 2:
Connecteur Webservice FF - 2j
Install sur federal-finance.fr - 2j
Générisation Line Chart - 2j

Total: 6j
