<div class="header">
  <link rel="stylesheet" href="/css/100m.css">
  <img style="position: relative;z-index: -1;" src="/extra/prez/01.jpg" />
  <h1>Documentation d'intégration<br><em>des composants 100M</em></h1>
</div>

Les composants embarqués 100M s'intègrent via une balise `<iframe>` configurée avec une API et des paramètres de rendu.

La documentation est constituée de deux parties:
- description de l'*API* et du modèle de données attendu
- exemples d'*IFRAME* avec les paramètres attendus, pour les différents types de fonds.

---

# Description de l'*API*

Pour configurer le composant 100m, la donnée doit être accessible via une API HTTP qui retourne une réponse JSON avec les champs suivants:

- **"uid"**: UID
- **"fund"**: nom du fonds, tel qu'affiché par le graphique.
- **(optionnel) "benchmark"**: nom de l'indice, tel qu'affiché par le graphique.
- **"type"**: Type de Fonds, la valeur attendue est une chaine de caractère, parmi "FFG" / "FAF" / "EMTN".
- **(optionnel) "threshold"**: tableau des seuils dans le cas d'un FAF:
    - **"description"**: description du seuil, telle qu'affichée sur le graphique.
    - **"value"**: niveau absolu du seuil. Par exemple, si le seuil est de -30%, relatif à une valeur initiale de 100, le niveau à mettre sera 70.0 .
- **(optionnel) "coupon"**: tableau des dates de versement de coupon.
- **"data"**: qui est un tableau avec les valeurs suivantes:
    - **"date"**: date au **Format ISO** (YYYY-MM-DD ou YYYY-MM-DDTHH:mm:ss.msTZ)
    - **"fund"**: valeur liquidative du fonds à la date en question.
    - **(optionnel) "benchmark"**: valeur liquidative de l'indice à la date en question.

**Exemple de retour API pour un FAF dont l'uid est FR0010869602**:
https://embed.100m.io/api/FR0010869602

```json
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

---

# Intégration de l'*IFRAME*

Pour intégrer le composant 100m, la balise suivante doit être intégrée dans une page HTML existante :

```html
<iframe style="width:100%;height:420px" frameBorder="0" src="https://embed.100m.io?api=https://embed.100m.io/api/FR0013120854"></iframe>
```

Voici un exemple ou l'url de l'API et les paramètres de l'API sont configurables via le champ texte qui suit (avec des boutons d'exemples):

<div>
  <label>Fonds Ouvert:</label>
  <span tag tt="FR0000447658" onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0000447658&quot;></iframe>'">Federal Monétaire C</span>

</div>
<div>
  <label>Fonds A Formule:</label>
  <span tag tt="FR0012847002" onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0012847002&quot;></iframe>'">Autofocus Rendement</span>
  <span tag tt="FR0010869602" onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0010869602&quot;></iframe>'">Formul'action</span>
  <span tag tt="FR0012517274" onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0012517274&quot;></iframe>'">Autofocus Croissance</span>
  <span tag tt="FR0011228352" onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0011228352&quot;></iframe>'">BPE Rendement</span>
  <span tag tt="FR0013143799" onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0013143799&quot;></iframe>'">Diapazen Climat</span>
</div>
<div>
  <label>Titres de Créance:</label>
    <span tag tt="FR0013120854" onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0013120854&quot;></iframe>'">Alcanterra</span>
 </div>

<pre><code class="demo lang-html" contentEditable oninput="document.querySelector('#iframe-example').innerHTML = event.target.textContent">&lt;iframe style="width:100%;height:420px" frameBorder="0"
 src="https://embed.100m.io?api=https://embed.100m.io/api/FR0013120854"&gt;&lt;/iframe&gt;
</code></pre>

<div id="iframe-example">
  <iframe style="width:100%;height:420px;" frameBorder="0" src="https://embed.100m.io?api=https://embed.100m.io/api/FR0013120854"></iframe>
</div>

## Exemples de customisation des graphiques
<div>
  <label>Style via injection de CSS dans une balise 'onload':</label>
  <span tag onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px;border: 1px dashed #23bcf8&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0000447658&quot;></iframe>'">Border</span>
  <span tag onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe onload=&quot;this.contentWindow.postMessage(\'.m100-kpi>div:first-child{color:rgba(82, 121, 199, .8)}.m100-kpi>div:nth-child(n+2){color:rgba(255, 121, 57, .8)}.plot-line .fund{stroke:rgba(82, 121, 199, .8)}.plot-line .benchmark{stroke:rgba(255, 121, 57, .8)}.plot-legend .fund .color{background:rgba(82, 121, 199, .8)}.plot-legend .benchmark .color{background:rgba(255, 121, 57, .8)}\', \'*\')&quot; style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0000447658&quot;></iframe>'">Blue & Orange</span>
  <span tag onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe onload=&quot;this.contentWindow.postMessage(\'.icon-link{display:none;}\', \'*\')&quot; style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0000447658&quot;></iframe>'">No Export</span>
</div>
<div>
  <label>Taille via la balise 'style':</label>
  <span tag tt="512x320" onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = document.querySelector('#iframe-example').innerHTML.replace(/^\s*/, '').replace(/width:(-|\s|\d|%|px|;)*height:(-|\s|\d|%|px|;)*(margin-left:)?(-|\s|\d|%|px|;)*/,'width:512px;height:320px;')">Medium</span>
  <span tag tt="640x400" onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = document.querySelector('#iframe-example').innerHTML.replace(/^\s*/, '').replace(/width:(-|\s|\d|%|px|;)*height:(-|\s|\d|%|px|;)*(margin-left:)?(-|\s|\d|%|px|;)*/,'width:640px;height:400px;')">Large</span>
  <span tag tt="800x500" onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = document.querySelector('#iframe-example').innerHTML.replace(/^\s*/, '').replace(/width:(-|\s|\d|%|px|;)*height:(-|\s|\d|%|px|;)*(margin-left:)?(-|\s|\d|%|px|;)*/,'width:800px;height:500px;margin-left:-70px;')">XLarge</span>
  <span tag tt="300x200-resizable" onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:300px;height:200px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0011228352&quot;></iframe>'">Resize</span>
</div>
<div>
  <label>Période de sélection:</label>
  <span tag onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0000447658&date=2017-01-01|2017-12-31&quot;></iframe>'">YTD</span>
  <span tag onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0000447658&date=2016-01-01|2016-12-31&quot;></iframe>'">2016</span>
  <span tag onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0000447658&date=2016-02-01|2016-03-01&quot;></iframe>'">Custom</span>
</div>
<!-- <div>
  <label>Autres:</label>
  <span tag onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;https://embed.100m.io/?api=https://embed.100m.io/api/FR0011228352-no-benchmark&quot;></iframe>'">No benchmark</span>
  <span tag onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;http://127.0.0.1:1100/?api=https://embed.100m.io/api/FR0011228352&date=2017-01-01|2017-12-31&quot;></iframe>'">Debug</span>
  <span tag onclick="document.querySelector('.demo').textContent = document.querySelector('#iframe-example').innerHTML = '<iframe style=&quot;width:100%;height:420px&quot; frameBorder=&quot;0&quot; src=&quot;http://127.0.0.1:1100/?api=/dist/FR0011228352.json&date=2017-01-01|2017-12-31&quot;></iframe>'">Local API</span>
</div> -->

---

# Informations Supplémentaires

Si l'application et l'API ne sont pas sur le même domaine, 2 choix se présentent:

1. Ajouter un header "cross-domain-origin: *" dans l'API
2. Utiliser un proxy cross-domain, exemple:
  - [crossorigin.me](https://github.com/technoboy10/crossorigin.me)
  - [simple-corsproxy](https://github.com/bmpvieira/simple-corsproxy)
