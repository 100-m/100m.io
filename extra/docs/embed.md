<div style="margin-bottom: 140px;">
  <img src="/extra/background.png"/>
  <img src="/extra/logo.png" style="position: absolute;top: 50%;left: 50px;width: 100px;" />
  <h1 style="-webkit-print-color-adjust: exact;position: absolute;top: 40%;left: 50px;color: rgba(255, 255, 255, 1);">Composants Graphique</h1>
</div>

# Documentation d'intégration

---

Les composants embarqués 100M s'intègre via une balise `<iframe>` configuré avec une API et des paramètres de rendu.

**Démo**: https://playground.100m.io/embed.html

---

# API:

Pour configurer le composant 100m, la données doit être accessible via une API HTTP qui retourne une réponse JSON avec les champs suivants :

- Date au **Format ISO** (YYYY-MM-DD ou YYYY-MM-DDTHH:mm:ss.msTZ)
- Valeur liquidative du fonds
- Valeur liquidative de l'indice

**Exemple**: https://embed.100m.io/dist/api.json

```
[
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
```

---

# IFRAME

Pour intégrer le composant 100m, la balise suivante doit être intégrer dans une page HTML existante :

<style>code{text-align:left}</style>
`<iframe style="width:100%;height:300px;" frameBorder="0" src="https://embed.100m.io?api=https://embed.100m.io/dist/api.json&uid=FR0013120854&type=EMTN"></iframe>`

Dans l'exemple ci-dessus, les services accessible sont :
- Application packagée de graphique >  https://embed.100m.io
- API de données du fonds > https://embed.100m.io/dist/api.json
- Configuration du graph > **uid=FR0013120854&type=EMTN**
- Fonds: ALCANTERRA MAI 2016

Résultat:

<iframe style="width:100%;height:300px;" frameBorder="0" src="https://embed.100m.io?api=https://embed.100m.io/dist/api.json&uid=FR0000284093"></iframe>

---

### Information Supplémentaire

Si l'application et l'API ne sont pas sur le même domaine, 2 choix se présentent:

1. Ajouter un header "cross-domain-origin: *" dans l'API
2. Utiliser un proxy cross-domain: exemple crossorigin.me (https://github.com/technoboy10/crossorigin.me ou https://github.com/bmpvieira/simple-corsproxy)
