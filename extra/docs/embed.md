# Démo:

https://playground.100m.io/embed.html

# Format API:

- Date: Format ISO
- VL du fonds et de l'indice

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

Exemple ici: https://embed.100m.io/dist/api.json

# Procédure d'intégration

Voici la procédure d'intégration de l'application:

1. Vérifier que le fichier HTML est bien accessible. (exemple: [Source Index HTML](view-source:https://embed.100m.io/))
2. Vérifie que l'API est bien accessible. (exemple: https://embed.100m.io/dist/api.json)
3. Intégrer la balise iframe à l'endroit où le graph doit être affiché:

`<iframe style="width:100%;height:300px;" frameBorder="0" src="https://embed.100m.io?api=https://embed.100m.io/dist/api.json&uid=FR0000284093"></iframe>`

<iframe style="width:100%;height:300px;" frameBorder="0" src="https://embed.100m.io?api=https://embed.100m.io/dist/api.json&uid=FR0000284093"></iframe>

Si l'application et l'API ne sont pas sur le même domaine, 2 choix se présentent:

1. Ajouter un header "cross-domain-origin: *" dans l'API
2. Utiliser un proxy cross-domain: exemple crossorigin.me (https://github.com/technoboy10/crossorigin.me ou https://github.com/bmpvieira/simple-corsproxy)
