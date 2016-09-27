# Inventaire du reporting existant

Commentaire `Label SP-G`

- Texte

Actif Spge `Label SP-A1`

- Number pour Spge

Allocation par Classe d'Actif `Label SP-A2`

- Data table + Bar Chart pour (Sgpe)

Allocation To PIIGS `Label SP-A3`

- Data table pour (Spge & ECI)

Breakdown Secteur `Label SP-A4`

- Bar Chart pour (Spge & ECI)

Breakdown Country `Label SP-A5`

- Bar Chart pour (Spge & ECI)

Breakdown par Notations `Label SP-A6`

- Data table pour (Spge & ECI)

Top Positions `Label SP-A7`

- Data table pour (Spge & ECI)

Top mouvements `Label SP-A8`

- Data table pour (Sgpe)

Exposition devise `Label SP-A9`

- Data table pour (Spge)

Distribution Des Maturites `Label SP-A10`

- Bar Chart + Table pour (Sgpe)

Breakdown Action By Sector And By Name and 1M/3M perf' `Label SP-A11`

- Data Table pour (Spge & ECI)

Distribution Des Sensi Equity `Label SP-A12`

- Data Table pour (Spge & ECI)

Performance par secteurs `Label SP-P1`

- Data Table pour (Spge & ECI)

Serie Temporelle de Performance `Label SP-P2`

- Line Chart + Recap Numbers pour (Spge, ECI & EuroStoxx)

PnL Explain (Greek) `Label SP-P3`

- Data Table pour (Spge & ECI)

Risques Aggreges (Delta, Vega, Gamma, Convexite) `Label SP-A13`

- Data table pour (Spge & ECI)

Indicateurs Techniques (Spreads, Rating, IG/non-IG) `Label SP-T1`

- Data table pour (Spge & ECI)

Solvency 2 `Label SP-T2`

- Data table pour Spge

# Que l'on peut re-organiser

Un ecran de gestion (G1)

- un commentaire
- les tops mouvements
- (possible) un lien vers une detail ligne a ligne du portfeuille. (G2)

Un description du portefeuille (G2)

- a detailler dans un second temps.

Une presentation de l'allocation en termes de positions et de risques (A1) Ecran presentant pour differentes vues i.e. Credit, Action, Devise, Convexite, et Maturite

- Un top 3 (Dynamique drill-down pour le gérant, Static pour le public) -> limited -> `table`
- Une somme sur la vue et sur le filtre actif -> `nombre`
- Une vision de la distribution sur la vue et sur le filtre actif (Gerant) -> private -> `bar chart`

Un filtrage dynamique par:

- Pays -> `bar chart`
- Secteur -> `bar chart`
- Rating -> `bar chart`
- Classe d'actif -> `pie chart`

Fonctionalite de:

- comparaison avec l'indice
- passage facile d'une vue a une autre (Credit a Action, et vis versa) -> 'toggle button'
- un filtre PIIGS.
- un lien vers une table de position (private) -> regroupe `SP-A1` a `SP-A13`

Une presentation de la performance en serie temporelle (P1) -> serie temporelle avec brush

Une explication de cette performance (P2) Ecran presentant :

- Un split alpha-beta -> `waterfall`
- Une somme `nombre`
- Une repartition par grecs `waterfall chart`

Un filtrage dynamique par:

- Pays -> `bar chart`
- Secteur -> `bar chart`
- Rating -> `bar chart`
- Classe d'actif -> `pie chart`

Fonctionalite de:

- comparaison avec l'indice
- passage de la vue Credit, a Action, a Devise, a Maturite et a Convexite.
- un filtre PIIGS.
- un lien vers une table de position (private)

> regroupe `SPP1` a `SP-P3`

Reprise de indicateurs techniques figurant dans le reporting actuel (T1)

# La maquette aujourd'hui couvre

G1 P1 a moitie A1 a moitie T1

# Objectifs

Pour le gerant: _Simplifier la creation, la distribution de l'information_ Ameliorer la qualite de l'analyse de l'information (rapidite d'analyse, profondeur de l'analyse), gain de productivite (prend sur nous le dev' et conception produit). Hierarchie de l'information.

- un gain en terme d'image (competitivite++, transparence ++).

Pour l'utilisateur : Simplifier l'acces a l''information de reporting,

- acces facilite (pas de telechargement, cross plateforme, information condensee, regroupee et dynamique)
- information pre-package, pre-digeree.

Cote systeme et tech:

- automatisation complete de la chaine de reporting.
- suivi des interactions clients via les analytics (monitoring ouverture, interaction, temps passe etc.)
- maintenabilite de l'infra
- unification des systemes de reporting (interne, externe)
