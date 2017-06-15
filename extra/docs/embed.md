<div style="margin-bottom: 140px;">
  <img src="/extra/background.png"/>
  <img src="/extra/logo.png" style="position: absolute;top: 50%;left: 50px;width: 100px;" />
  <h1 style="-webkit-print-color-adjust: exact;position: absolute;top: 40%;left: 50px;color: rgba(255, 255, 255, 1);">Composants Graphiques</h1>
</div>

# Documentation d'intégration

---

Les composants embarqués 100M s'intègrent via une balise `<iframe>` configurée avec une API et des paramètres de rendu.

La documentation est constitué de deux parties:
- description de l'API et du modèle de données attendu
- exemples d'IFRAME avec les paramètres attendus, pour les différents types de fonds.

---

# Description de l'API

Pour configurer le composant 100m, la donnée doit être accessible via une API HTTP qui retourne une réponse JSON avec les champs suivants:

- **"uid"**: UID
- **"fund"**: nom du fonds
- **"benchmark"**: nom de l'indice
- **"type"**: Type de Fonds, la valeur attendue est une chaine de caractère, parmi "FFG" / "FAF" / "EMTN".
- **(optionnel) "segment"**: tableau de valeurs seuils dans le cas d'un FAF.
- **(optionnel) "legend"**: tableau des decriptions des seuils dans le cas d'un FAF.
- **(optionnel) "coupon"**: tableau des dates de versement de coupon.
- **"data"**: qui est un tableau avec les valeurs suivantes:
    - **"date"**: date aux **Format ISO** (YYYY-MM-DD ou YYYY-MM-DDTHH:mm:ss.msTZ)
    - **"fund"**: valeur liquidative du fonds à la date en question.
    - **"benchmark"**: valeur liquidative de l'indice à la date en question.

**Exemple de retour API pour un FAF dont l'uid est FR0010869602**:  
https://embed.100m.io/api/FR0010869602

```
{
  "config": {
    "uid": "FR0010869602",
    "fund": "Formul'action 2017 FP",
    "benchmark": "Euro Stoxx 50",
    "type": "FAF",
    "threshold": [{
      "description": "Seuil minimal de distribution de coupon",
      "value": 70.0
    }, {
      "description": "Seuil de perte en capital à l'échéance",
      "value": 60.0
    }],
    "coupon": [{
      "date": "2013-07-03",
      "value": 0.07
    }, {
      "date": "2014-07-03",
      "value": 0.07
    }]
  },
  "data": [
    {
      "date": "2015-06-04T22:00:00.000Z",
      "fund": 474.84,
      "benchmark": 3535.58
    },
    {
      "date": "2015-06-05T22:00:00.000Z",
      "fund": 474.84,
      "benchmark": 3535.58
    },
    ...
    {
      "date": "2017-04-30T21:59:59.999Z",
      "fund": 475.2,
      "benchmark": 3667.48
    }
  ]
}
```

Dans tous les exemples qui suivent dans ce documents, nous ferons des appels l'API temporaire suivante: https://embed.100m.io/api/FR0000987703

---

# Intégration de l'iFrame

Pour intégrer le composant 100m, la balise suivante doit être intégrée dans une page HTML existante :

<style>code{text-align:left}</style>
`<iframe style="width:100%;height:300px;" frameBorder="0" src="https://embed.100m.io?api=https://embed.100m.io/api/FR0013120854"></iframe>`

## Fonds ouvert FFG - Hors Fonds à Formule
Voici le rendu pour un fonds FFG (FR0000987703):
<iframe style="width:100%;height:300px;outline: 3px solid rgba(0,0,0,.14)" frameBorder="0" src="https://embed.100m.io/?api=https://embed.100m.io/api/FR0000987703"></iframe>

## Fonds ouvert FFG - Fonds à Formule
Voici le rendu pour un fonds FAF (FR0010869602):
<iframe style="width:100%;height:300px;outline: 3px solid rgba(0,0,0,.14)" frameBorder="0" src="https://embed.100m.io/?api=https://embed.100m.io/api/FR0010869602"></iframe>

### Exemple Groupe 1
*à paramétrer*
### Exemple Groupe 2
*à paramétrer*
### Exemple Groupe 3
*à paramétrer*
### Exemple Groupe 4
*à paramétrer*
### Exemple Groupe 5
*à paramétrer*

## Titres de créance (EMTN)
Voici le rendu pour un titre EMTN (FR0013120854):
*Notez que les données qui ont été employées pour l'exemple sont factices et qu'une bordure a été ajouté*
<iframe style="width:100%;height:300px;outline: 3px solid rgba(0,0,0,.14)" frameBorder="0" src="https://embed.100m.io/?api=https://embed.100m.io/api/FR0013120854"></iframe>
---

# Démo

Voici un exemple ou l'url de l'API et les paramètres de l'API sont configurables via le champ texte qui suit (avec des boutons d'exemples):

<div>
<label>Size - Ratio 16:10</label>
<button tt="384x240" onclick="document.querySelector('textarea').value = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:384px;height:240px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0013120854&quot;></iframe>'">EMTN Min</button>
<button tt="480x300" onclick="document.querySelector('textarea').value = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:480px;height:300px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0013120854&quot;></iframe>'">EMTN Medium</button>
<button tt="600x375" onclick="document.querySelector('textarea').value = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:600px;height:375px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0013120854&quot;></iframe>'">EMTN Large</button>
<button tt="800x500" onclick="document.querySelector('textarea').value = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:800px;height:500px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;margin-left:-100px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0013120854&quot;></iframe>'">EMTN XLarge</button>
</div><div>
<label>Type - FFG/FAF/EMTN</label>
<button tt="FR0000987703" onclick="document.querySelector('textarea').value = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:480px;height:300px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0000987703&quot;></iframe>'">FFG</button>
<button tt="FR0010869602" onclick="document.querySelector('textarea').value = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:480px;height:300px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0010869602&quot;></iframe>'">FAF</button>
<button tt="FR0013120854" onclick="document.querySelector('textarea').value = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:480px;height:300px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0013120854&quot;></iframe>'">EMTN</button>
</div>
<div>
<label>Selection Date - FFG/FAF uniquement</label>
<button onclick="document.querySelector('textarea').value = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:480px;height:300px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0000987703&date=2017-01-01|2017-12-31&quot;></iframe>'">YTD</button>
<button onclick="document.querySelector('textarea').value = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:480px;height:300px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0000987703&date=2016-01-01|2016-12-31&quot;></iframe>'">2016</button>
<button onclick="document.querySelector('textarea').value = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:480px;height:300px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0000987703&date=2016-02-01|2016-03-01&quot;></iframe>'">Custom</button>
</div>
<div>
<label>Specific - Edge Cases</label>
<button onclick="document.querySelector('textarea').value = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:480px;height:300px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/no-benchmark&quot;></iframe>'">No benchmark</button>
<button onclick="document.querySelector('textarea').value = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:480px;height:300px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/empty&quot;></iframe>'">Empty optional values</button>
<button onclick="document.querySelector('textarea').value = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:384px;height:240px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;&quot; frameBorder=&quot;0&quot; src=&quot;http://127.0.0.1:1100/?api=/dist/FR0010869602.json&date=2017-01-01|2017-12-31&quot;></iframe>'">Debug</button>
</div>

<textarea oninput="document.querySelector('#iframe-example').innerHTML = event.target.value"></textarea>

<div id="iframe-example"></div>

---

# Information Supplémentaire

Si l'application et l'API ne sont pas sur le même domaine, 2 choix se présentent:

1. Ajouter un header "cross-domain-origin: *" dans l'API
2. Utiliser un proxy cross-domain: exemple crossorigin.me (https://github.com/technoboy10/crossorigin.me ou https://github.com/bmpvieira/simple-corsproxy)

<footer>
  <grid>
    <div col="1/2">
      <strong>Valentin Brajon</strong> from <strong><a att href="https://100m.io" target="_blank">100M S.A.S.</a></strong>
    </div>
    <div col="1/2" txt="r">
      Last Update <strong>Q2 2017</strong> - <a att href="https://github.com/100-m/100m.io/commits/master/extra/docs/embed.md" target="_blank">Versions</a> - <a att href="https://100m.io/md?embed.md" target="_blank">Link</a>
    </div>
  </grid>
</footer>
