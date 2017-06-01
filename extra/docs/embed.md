<div style="margin-bottom: 140px;">
  <img src="/extra/background.png"/>
  <img src="/extra/logo.png" style="position: absolute;top: 50%;left: 50px;width: 100px;" />
  <h1 style="-webkit-print-color-adjust: exact;position: absolute;top: 40%;left: 50px;color: rgba(255, 255, 255, 1);">Composants Graphiques</h1>
</div>

# Documentation d'intégration

---

Les composants embarqués 100M s'intègrent via une balise `<iframe>` configurée avec une API et des paramètres de rendu.

La documentation est constitué de deux parties:
- API avec le modèle de données attendu
- IFRAME avec les paramètres attendus et une démo

---

# API

Pour configurer le composant 100m, la donnée doit être accessible via une API HTTP qui retourne une réponse JSON avec les champs suivants:

- UID
- Nom du fonds
- Nom de l'indice
- Type de Fonds (parmis FFG / FAF / EMTN)
- Seuils, coupon et légende (dans le cas d'un FAF)

Ainsi qu'un tableau avec les valeurs suivante:
- Date au **Format ISO (IMPORTANT!)** (YYYY-MM-DD ou YYYY-MM-DDTHH:mm:ss.msTZ)
- Valeur liquidative du fonds
- Valeur liquidative de l'indice

**Exemple de FAF**: https://embed.100m.io/dist/FR0010869602.json

```
{
  "config": {
    "uid": "FR0010869602",
    "fund": "Formul'action 2017 FP",
    "benchmark": "Euro Stoxx 50",
    "type": "FAF",
    "segment": [3550]
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

# IFRAME

Pour intégrer le composant 100m, la balise suivante doit être intégrée dans une page HTML existante :

<style>code{text-align:left}</style>
`<iframe style="width:100%;height:300px;" frameBorder="0" src="https://embed.100m.io?api=https://embed.100m.io/dist/FR0013120854.json"></iframe>`

##### Voici le rendu pour un titre EMTN (FR0013120854):
*Notez que les données qui ont été employées pour l'exemple sont factices et qu'une bordure a été ajouté*
<iframe style="width:100%;height:300px;outline: 3px solid rgba(0,0,0,.14)" frameBorder="0" src="https://embed.100m.io/?api=/dist/FR0013120854.json"></iframe>

##### Voici le rendu pour un fonds FFG (FR0000987703):
<iframe style="width:100%;height:300px;outline: 3px solid rgba(0,0,0,.14)" frameBorder="0" src="https://embed.100m.io/?api=/dist/FR0000987703.json"></iframe>

##### Voici le rendu pour un fonds FAF (FR0010869602):
<iframe style="width:100%;height:300px;outline: 3px solid rgba(0,0,0,.14)" frameBorder="0" src="https://embed.100m.io/?api=/dist/FR0010869602.json"></iframe>

---

# Démo

Voici un exemple ou l'url de l'API et les paramètres de l'API sont configurables via le champ texte qui suit:

<textarea oninput="document.querySelector('#iframe-example').innerHTML = event.target.value">
<iframe style="min-width:300px;min-height:200px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;" frameBorder="0" src="https://embed.100m.io/?api=/dist/FR0010869602.json"></iframe>
</textarea>

<div id="iframe-example">
  <iframe style="min-width:300px;min-height:200px;outline: 3px solid rgba(0,0,0,.14);resize:both;overflow:auto;" frameBorder="0" src="https://embed.100m.io/?api=/dist/FR0010869602.json"></iframe>
</div>

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
