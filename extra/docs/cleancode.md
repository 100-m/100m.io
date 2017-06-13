<div style="margin-bottom: 140px;">
  <img src="/extra/background.png"/>
  <img src="/extra/logo.png" style="position: absolute;top: 50%;left: 50px;width: 100px;" />
  <h1 style="-webkit-print-color-adjust: exact;position: absolute;top: 40%;left: 50px;color: rgba(255, 255, 255, 1);"></h1>
</div>

<h1 style="margin-top:-50px; color:rgba(116, 228, 162, .7)"><small>Clean Code</small></h1>

---

* L'objectif de tout codeur est de produir du code **lisible** et **maintenable**.

## Le naming
* fonction: Le nom d'une fonction doit dire ce qu'elle fait.
* fonction: si tu n'arrives pas à nommer une fonction, c'est probablement qu'elle est trop complexe et qu'il faut la scinder en plusieurs fonctions. 
* variable: éviter les noms de variables génériques (type "i")
* variable: pour éviter de nommer une variable temporaire, utiliser le chainage de fonction.

## code structure
* fonction: pour des questions de lisibilité, les fonctions ne doivent prendre idéalement qu'un argument.
* fonction: en tout état de cause, jamais de plus 3 arguments.
* fonction: à l'exception des fonctions "mathematiques" i.e. analytics qui peuvent prendre beaucoup plus d'arguments.
* fichiers: fichiers ne doivent pas faire plus de 200 lignes.
* pas plus de 7 fichiers par dossier.

## bonnes pratiques
* "no side effect": éviter les side effects dans une fonction.
* "design first": écrire d'abord le code 'haut niveau' puis implémenter les fonctions plus 'bas niveau'.
* mettre en place des tests.
* refactoring: le refactoring consiste à enlever les duplicates dans le code et à le rendre plus lisible.

