# Data model spreadsheets
## Prestations (data_prestations.xls)
### Description
Fichier définissant les garanties offerte par une mutuelle + formule
Utiliser fichier template, cf les fichiers d'exemples
### Description des champs
 - Mutuelle, Formule : a fixer, Ex. : CARREFOUR F2
 - Categorie, nature_du_soin : Fixe ne pas modifier
 - Conventionné : signataire CAS ou non, pour l'instant seulement CAS
 - remboursement_pct_tarif_am : Remboursement **en pourcentage** du tarif conventionnel AM, avec remboursement sécurité sociale inclus. Ex. : soins_courants_generaliste -> 100%
 - remboursement_pct_frais_reel : Remboursement **en pourcentage** des frais rééles. Ex. : hospitalisation_frais_sejours -> 100%
 - remboursement_montant : Plafond de remboursement **en Euro** annuel (par bénéficiaire ??). Ex. : optique_monture -> 100
 - remboursement_montant_par_unite : Remboursement **en Euro** par unité de soin(jours, séance etc...). Ex. : hospitalisation_chambre_particuliere -> 15; soins_courants_alternatives (médecine alternative) -> 15

 Si tous les champs remboursement sont vides = soin non couvert

## Soins (data_soins.xls)
### Description
#### Onglet data_soins
Ici on défini les soins utilisés dans les cas d'usages.
#### Onglet data_profiles
Vecteur de soins pour chaque type d'utilisateur, sélectionner un soin(défini dans l'onglet data_soins) et la quantité pour chaque type d'utilisateur. Ex. Enfant : 2 medecine_generale_consultation, 1 ophtalmologue_consultation, 1 orthodontie_semestre ...
#### Onglet nature_du_soin
Table de référence, avec description un peu plus verbeuse des natures de soin
### Description des champs
#### Onglet data_soins
 - Soin : nom du soin à définir, préferablement en minuscule séparé d'underscores(\_) Ex. medecine_generale_consultation
 - Nature du soin: Catégorie de soins auquel le soins créé appartient, à choisir dans une liste Ex. : medecine_generale_consultation -> soins_courants_generaliste
 - Prix : Coût total du soin. Ex. : dentaire_couronne -> 400
 - tarif_couvert : tarif conventionnel couvert par l'AM. Ex : dentaire_couronne -> 107.5
 - taux_am : Taux de remboursement du tarif conventionnel pris en charge par l'AM. Ex : dentaire_couronne -> 70%
 - participation_forfaitaire : Participation forfaitaire en euro.
#### Onglet data_profils, nature_du_soin
Cf description
