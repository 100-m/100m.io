import m100 
import requests
from config import * 
from utils import *
from StringIO import StringIO

url = "http://www.powernext.com/marketFileProxy.php?format=csv&id=46&mf_idAppMarketDatas=26"
pegas = pd.read_csv(StringIO(requests.get(url).text))

#CSV string to CSV
#load to pandas.
pegas = {"storage.type": "FS", "storage.location": PATH_TMP+"pegas.csv"}
d = pegas >> rw.read 

url = "https://derivatives.euronext.com/fr/products/commodities-futures/EBM-DPAR/cours-ble-de-meunerie-matif"
schema = "#futureprices table" >> scrap.as_frame


#price des deals
#couverture sur des indices 
#front to back: flexinergy ou .... murex, triplePoint.

#pricing
	# calculer des mark-to-market: daily
		# pay gas sur formule.
		# 3 contrat: PrixFixe, Flottant, CustomerFixed, Formulas + Optionalites.
			# sous-jacent: achat: 
				# ble, 
				# mais, 
				# gaz, 
				# electricite.
			# vente: 
				# soja, 
				# huile de tournesol
		# option sur spreads (prix electricite, prix gaz, prix CO2)
		# calcule VAR Historique
		# calcule Prix Moyen de couverture
		# constitution du portefeuille hypothetique, si achat simultane a la vente ("portefeuille back to back", benchmark de valeur ajoutee).		
		# data dependencies: data sur bloomberg + prix experts. EuroNext.
# calcul de risques
# logistique
# scenario analysis.
# reporting KPI.
# verifier factures ex-post.
# etre lie a la turbine.

# margin management.
# lier les achats, les ventes et le trading qui optimise la vente.
# pbm: pas de vision claire, parce que les achats achete en decale.

# busines:
# transforme des cereales pour vendre gamme de produit differents. Raffinerie de cereales: extrait proteine, amidon et germe.
# avec le germe:
	# huile
	# tourteau -> alimentation animale
# proteine:
	# alimentation animale
	# alimentation humaine
# amidon (polymere du sucre)
	# pharma (enrobage sans sucre).
	# poche de glucose.
	# alimentation humaine (additif, propriete texturante de sauce, charcuterie)
	# additif dans l'industrie (papier, beton, placo).
	# alimentation infantile.
	# prix: lie au prix du sucre (car substitution)
	# analyse offre demande sur tous les marche de substitutions, pluviometrie 
	# (niveau du rhin pour chargement de peniche, prix de transport)

# category manager: cereale, 

# besoin de contrat vente.
	# option sur le prix: cappe floore.
	# option sur le volume: options sur le volume.
	# prix fixe
	# prix floatant (indice sur truc 3 ou 4 index)
	# stocke dans business objects -> quelques dizaine de milier de ligne par an.

# la vente: vend avant de produire (??) pas de stockage
# stockage: ?
# comment on sait si hedge un contrat de vente ou pas ?
	#1. planning de vente 
	#2. => planning d'achat
	#3. => ajustement en fonction des ventes realisees.
	#4. 

# data de vente: toutes les semaines.
	# systeme qui s'appelle radar. 

# faire le lien entre la vision physique et financiere.

# A quoi sert le rapport de gestion de marge:
	# Comprendre d'ou vient ta marge.
	# Marge structurelle ou effet de prix ?
	# Bons commerciaux ou acheteurs ont rattrape le coup?

# Usine: rendement (output vs input), cout de production varie suivant l'endroit. 
	# Estimation sur tous les couts variable annexe.
	# Pbm de Planning.
	# Pbm de stockage.

# Difference entre Trading et Achat.
# Acheteur fait du physique. 
# Tradeur fait du financier.


# VENTE: FIXED PRICE / FIXED VOLUME
# AV_purchase = spot_price_info_t - purchase_price
# AV_sales = sales_price - spot_price_t
# !notion de rendement a prendre en compte.
# margin = sales_price - purchase_price
# margin = AV_sales + AV_purchase + (spot_price_info_t - spot_price_t)
# margin = AV_sales + AV_purchase + ALEA !!!
# marge = prix d'achat - prix de vente.


# VENTE FLOATING: 
# vendeur securise un volume, a un prix indexe.
# vendeur: 5MT @ Ble(Fixe:@ContractDate) + 2, delivery @Date
# AV_vendeur = sales_price - future_price.
# AV_purchase = future_price - purchase_price.

# GENERIC:
# AV_sales = sales_price - fair_market_price
# AV_purchase = fair_market_price - purchase_price (e.g. replication_price)

# Question:
# lag entre information de l'equipe d'achat par la vente.
# repartition des roles entre trading et achat ?
# combien de produits tu vends ? distribution ?
# recuperer les bill of orders et estimation du cout de production.
# qui determine les prix de vente des produits ?
# reflexion: sur quelle dimension la marge est-elle attribuable ?

# SOFTWARE: PRICING OF CONTRACT FOR SALES MARGIN COMPUTATION.
# SOFTWARE DE PRICING.

# Aujourd'hui equipe de la marge:
# QlikView: visualiser la marge.