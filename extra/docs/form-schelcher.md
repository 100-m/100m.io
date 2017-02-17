<div style="margin-bottom: 140px;">
  <img src="/extra/background.png"/>
  <img src="/extra/logo.png" style="position: absolute;top: 50%;left: 50px;width: 100px;" />
  <h1 style="-webkit-print-color-adjust: exact;position: absolute;top: 40%;left: 50px;color: rgba(255, 255, 255, 1);">Questionnaire PSSI</h1>
</div>

# Arkea Investment Solutions

---

### QU-1
**L'ensemble des domaines concernés par la SSI a-t-il un responsable désigné [sécurité informatique et télécom, sécurité générale de l'environnement de travail (documents, télécopie, téléphone), sécurité physique générale des sites et locaux] ou un interlocuteur privilégié [ex : DRH pour les actions de sensibilisation, la formation, les contrats de travail,  la gestion des comptes utilisateurs et des droits d'accès divers, le traitement des opérations délictueuses ou illicites et  la négligence interne] ?**

http://100m.io/md.html?file-security.md#company-structure

### QU-2
**La démarche de sécurité est-elle reconnue, soutenue et validée par la Direction Générale ?**

Oui, la sécurité et l'architecture de la plateforme sont des points clés sur lesquels une grande partie des ressources est investi.

### QU-3
**Existe-t-il un document décrivant la politique de sécurité des systèmes d'information et, en particulier, les principes d'organisation, de gestion et de pilotage de la sécurité (rôles et responsabilités) ainsi que les principes fondamentaux structurant le management de la sécurité de l'information ?**

http://100m.io/md.html?file-security.md
http://100m.io/md.html?file-architecture.md

### QU-4
**Si oui, cette politique de sécurité est-elle revue à intervalles réguliers ou lors de changements significatifs, afin d'assurer le maintien de sa pertinence et de son efficacité ?**

Lors de changements significatifs et 2 fois par an. Dernière mise à jour Q1 2017.

### QU-5
**Existe-t-il un programme de formation du personnel aux règles et mesures générales de SSI ?**

Oui concernant les développeurs, lors de la formation initiale de 2 semaines aux technologies et outils (ou via un document pour les prestataires).
Pour les non-développeurs, les accès sont limités.
Document accessible en interne uniquement.

### QU-6
**Vous assurez-vous d'opérer vos prestations en suivant les bonnes pratiques de SSI publiquement accessibles (exemple : CNIL, ANSI, ANSSI, NIST…) ?**

L'application SAAS respect les standards de sécurité Amazon et Auth0.
L'accès et l'extraction des données métiers et des données sensibles est uniquement accessible par l'un de nos serveurs dont l'accès est extrêmement restreint en interne.
L'accès en lecture à ces données est ensuite restreint en fonction des rôles utilisateurs.
Les données ayant un impact plus faible (traductions, notifications, commentaires) sont stockées sur Firebase, certaines données sont également concernées par l'authentification et les rôles utilisateurs et utilise le système interne de sécurité de Firebase.

- https://aws.amazon.com/whitepapers/aws-security-best-practices
- https://auth0.com/security
- https://auth0.com/docs/jwt

### QU-10
**Dans le cadre d'une co-traitance, vous assurez-vous que vos tiers répondent aux mêmes exigences SSI que celles définies contractuellement avec le groupe Crédit Mutuel Arkéa ?**

Toutes interactions avec des développeurs prestataires est revue, testé et validé avant déploiement. Les intervenants externes n'ont pas d'accès aux serveurs d'extraction de données actuellement.

### QU-11
**Réalisez-vous des analyses de  risques liés aux transfert d'informations ou de logiciels avec un tiers afin de formaliser contractuellement les procédures, responsabilités et obligations de chacune des parties ?**

Nous n'avons pas actuellement d'audit effectué par un tiers certifié.

### QU-12
**Pouvez-vous présenter l'ensemble des clauses SSI standards qui sont adossées à tout accord signé avec un tiers impliquant un accès au système d'information ou aux locaux contenant de l'information ?**

Partiellement, nous réduisons les accès aux données en écriture et au serveur d'extraction de donnée aux employés de 100M seulement. Les prestataires n'ont accès qu'au code applicatif actuellement.

### QU-13
**Si oui, tout accès d'un tiers au système d'information ou aux locaux contenant des données du groupe Crédit Mutuel Arkéa n'est-il autorisé qu'après la signature d'un accord formel reprenant ces clauses ?**

Non

### QU-14
**Pouvez-vous présenter les éléments SSI (chapitres ou annexes) décrivant les procédures mises en place dans le cadre de la gestion des incidents de SSI ?**

Oui

### QU-15
**Si oui, pouvez-vous présenter l'organisation mise en place afin de gérer ces incidents SSI ?**

Oui

### QU-16
**Si oui, pouve-vous présenter les moyens permettant de vous assurer que toute atteinte à l'intégrité des informations fait l'objet d'alertes et d'actions formalisées ?**

Oui

### QU-17
**Si oui, pouvez-vous présenter les moyens permettant de vous assurer que toute atteinte à la confidentialité des données hébergées fait l'objet d'alertes et d'actions formalisées ?**

Oui

### QU-18
**Si oui, pouvez-vous présenter les procédures d'alertes et d'escalades permettant de réagir aux incidents de sécurité détectés ?**

Oui

### QU-19
**Existe-t-il un plan de gestion de crise SSI incluant, en fonction de divers symptômes, les noms et coordonnées des personnes à prévenir pour qu'elles puissent effectuer un premier diagnostic et, en fonction de ce diagnostic, les responsables de la cellule de crise à rassembler et les actions urgentes à mener ?**

Oui, la procédure est la même que pour les incidents.

### QU-20
**Si oui, existe-t-il au moins une procédure d'alerte, diffusée à l'ensemble du personnel, qui permette, directement ou indirectement (par le personnel de surveillance), de joindre les personnes ad hoc aptes à déclencher le plan de crise ?**

Oui

### QU-21
**Pouvez-vous présenter les éléments SSI (Chapitres ou annexes) décrivant les conditions de mise en œuvre de la sécurité physique des locaux informatiques (informatique, réseau, téléccom…) ?**

Non

### QU-22
**Avez-vous établi une politique de gestion des droits d'accès aux salles et locaux informatiques s'appuyant sur une analyse préalable des exigences de sécurité, basées sur les enjeux de l'activité ?**

Non

### QU-26
**Pouvez-vous présenter les éléments SSI (Chapitres ou annexes) décrivant les conditions de mise en œuvre de la sécurité physique aux locaux (bâtiments, bureaux…) ?**

Non

### QU-27
**Avez-vous établi une politique de gestion des droits d'accès aux zones de bureaux s'appuyant sur une analyse préalable des exigences de sécurité, basées sur les enjeux de l'activité ?**

Non

### QU-31
**Existe-t-il un processus permettant de détecter, a posteriori, des anomalies dans les processus de contrôle d'accès (audit des procédures et du paramétrage des systèmes de contrôle d'accès, audit des procédures d'exception et d'intervention, etc.) ?**

Non

### QU-34
**Pouvez-vous présenter les éléments SSI (Chapitres ou annexes) décrivant les conditions de gestion de votre réseau étendu ?**

Non

### QU-43
**Des solutions de liens permanents et d'échanges de données chiffrées peuvent-elles être mises en place ?**

Oui

### QU-44
**Si oui, pouvez-vous décrire ces solutions?**

SSH (PULL ou PUSH): Nous pouvons accéder ou donner accès à un serveur via SSH (par autorisation de clé) pour accéder à des fichiers en lecture seul de manière simple et sécurisé. Nous avons un système de détection de connexion et de detection de modifications permettant de déclencher un évènement après échange de données.
SFTP (PULL): Nous pouvons accéder à un FTP sécurisé via SSH de la même manière.

### QU-45
**Y a-t-il un audit régulier, au moins une fois par an, de l'ensemble des systèmes de chiffrement des données échangées et des procédures associées ?**

Oui, 2 fois par ans, l'architecture est revue et mise à jour dans son intégralité.

### QU-69
**Pouvez-vous présenter un document ou une procédure opérationnelle décrivant la politique de gestion des droits d'accès aux systèmes ?**

Oui

### QU-74
**Pouvez-vous présenter un document ou une procédure opérationnelle spécifique à l'usage du personnel d'exploitation des systèmes d'information ?**
Cette politique devrait traiter de la protection de l'information, mais aussi de la protection des biens et procédés et des comportements interdits.

Non

### QU-80
**Les décisions de changements majeurs des équipements et systèmes font-elles l'objet de procédures de contrôle (enregistrement, planification, approbation formelle, communication à l'ensemble des personnes concernées, etc.) ?**

Partiellement, les modèles d'ordinateurs portables fournis sont limités aux modèles de DELL XPS, Macbook Pro récent. Nous avons un script d'installation initiale et de configuration de Windows et Mac.

### QU-83
**Conservez-vous une trace de toute opération de maintenance ?**

Non, nous ne faisons pas de maintenance, uniquement des remises à 0.

### QU-84
**Avez-vous définis un processus pour les opérations de maintenance comprenant  un contrôle systématique des paramètres de sécurité (tels que définis lors de la mise en production), un contrôle systématique des paramètres d'enregistrement des événements de sécurité (événements à enregistrer, contextes des événements à enregistrer, durée de rétention, etc.) ?**

Non, voir ci-dessus

### QU-87
**Existe-t-il un document ou une procédure opérationnelle spécifiant l'ensemble des paramètres de sécurité des systèmes ?**

Non, il existe un script, uniquement en interne pour le moment.

### QU-94
**Existe-t-il un document ou une procédure opérationnelle décrivant l'ensemble des paramètres de sécurité des applications ?**
Ces paramètres de sécurité doivent dépendre de l'architecture mise en place.

Non, chaque API utilise uniquement une fonction pour décoder le token et déterminer le rôle de l'utilisateur. Les paramètres de sécurité sont centralisés dans notre service d'authentification (Auth0 actuellement).

### QU-98
**Procèdez-vous à des audits réguliers des paramètres de sécurité spécifiés ?**

Oui, en interne, nous n'avons pas d'audits externes pour le moment.

### QU-99
**Procèdez-vous à une revue régulière des procédures d'exception et d'escalade en cas de difficulté ?**

Non, la procédure est fixe actuellement

### QU-100
**La production informatique gère-t-elle une version de référence pour chaque produit mis en exploitation (source et exécutable) ?**

Oui, le code source du Frontend ou Backend est disponible sur Git

### QU-102
**Avez-vous définis et mis en place un processus qui assure la gestion des supports ?**

Non

### QU-103
**Si vos supports sont externalisés utilisez vous une société spécialisée dans le stockage des supports d'archives ou de sauvegardes externalisées offrant des garanties contractuelles de sécurité ?**

https://100m.io/md.html?file-security.md#database

Oui, les backups sont les suivants:
- source code > Github
- code déployé frontend > Github Pages (1 commit par version compilée)
- code déployé backend > AWS Lambda (1 zip par version déployée)
- database > AWS Aurora Backups / Firebase Backups

### QU-104
**Avez-vous établi un plan de sauvegarde, couvrant l'ensemble des programmes et définissant les objets à sauvegarder et la fréquence des sauvegardes ?**

Oui, les backups sont journaliers par défaut

### QU-105
**Testez-vous régulièrement que les sauvegardes des programmes (sources et/ou exécutables) permettent effectivement de reconstituer à tout moment l'environnement de production  ?**

Oui, le code du frontend est très souvent déployé puis remis à la version précédente.
Le code du backend est moins souvent modifier et le changement de version se fait via l'interface Amazon pour cette raison (simple et suffisant).
La procédure pour la base de données est plus longue mais permet de revenir à un snapshot personnalisé sur la semaine précédente + un snapshot par semaine.

### QU-106
**L'ensemble des procédures et plans de sauvegarde des logiciels fait-il l'objet d'un audit régulier ?**

Oui, 2 fois par an l'architecture est mise à jour dans sa globalité.

### QU-107
**Avez-vous défini les actions à mener par le personnel informatique, pour prévenir, détecter et corriger les attaques par des codes malveillants (virus, spyware, autres) ?**

Non

### QU-112
**Avez-vous pris en compte et analysé les conséquences de la disparition d'un fournisseur (en cas de panne, de bogue ou de nécessité d'évolution) pour en déduire une liste de systèmes critiques ?**

Non, les fournisseurs sur lesquels l'architecture se base guarantissent 99% de disponibilité et sont tous remplaçable.

### QU-114
**Les règles concernant les audits menés sur les systèmes opérationnels, les procédures et responsabilités associées, sont-elles définies et documentées ?**
Les limites à apporter concernent les types d'accès aux programmes et aux données, les contrôles et les traitements admis, l'effacement des données sensibles obtenues, le marquage de certaines opérations, ... ainsi que l'habilitation des personnes réalisant l'audit."

Les audits sont réalisés en interne et via des tests end-to-end. Le code des scénarios end-to-end contient des règles d'accès aux pages et aux données par type d'utilisateurs.

### QU-117
**La procédure et les mécanismes de conservation, de distribution, et plus généralement de gestion des clés,  offrent-ils des garanties de solidité dignes de confiance et ont-ils été approuvés par votre responsable sécurité ?**

Les tokens utilisateurs sont révocable à tous moment.
Les mots de passes utilisateurs sont changeables à tous moment.
Les clés SSH de chaque développeur sont sécurisé via une passphrase et sont révocable.

### QU-119
**Avez-vous défini une procédure et des mécanismes de conservation, de distribution et d'échange de clés, et plus généralement de gestion des clés ?**

L'échange des clés publiques se fait via Github (par exemple: https://github.com/vbrajon.keys).
Les partages d'accès Amazon se font via un compte super admin et la création de user spécifique.
Les partages d'accès Google (Firebase, Google Tag Manager, Google Analytics) se font via la plateforme Google.

### QU-120
**Avez-vous défini et mis en place une politique et des moyens afin de protéger les mécanismes de chiffrement contre toute violation ou altération ?**

Le mot de passe super admin Amazon ainsi que le mot de passe Google Admin sont connu et utilisé uniquement par Clément Miglietti et Valentin Brajon.
Les clés SSH sont sécurisé par chaque développeur et les passphrases connues par chacun d'eux uniquement.

### QU-125
**Les processus de définition et de gestion des droits attribués aux profils utilisateurs sont-ils sous contrôle ?**

Les rôles et les droits utilisateurs sont gérés de manière centrale sur le service d'authentification (Auth0).

### QU-126
**Les processus qui assurent l'authentification sont-ils sous contrôle ?**

Oui, voir ci-dessus

### QU-127
**Les processus qui assurent le filtrage des accès sont-ils sous contrôle ?**

Oui, voir ci-dessus

### QU-130
**Les paramètres d'administration applicatifs sont-ils sous contrôle ?**
Ce contrôle requiert que la liste des personnes habilitées à changer les paramètres de contrôle soit très limitée, qu'il existe un contrôle d'accès renforcé pour pouvoir les modifier, et que les modifications soient journalisées et auditées."

Oui, voir ci-dessus
Actuellement 3 comptes admin 100m sont créer par projets.

### QU-132
**Les applications sensibles disposent-elles d'une fonction automatique de surveillance en temps réel en cas d'accumulation d'événements anormaux (par exemple tentatives infructueuses de connexion sur des stations voisines ou tentatives infructueuses de transactions sensibles) ?**

Oui, les logs ainsi que des fonctionnalités d'inspection et de notifications sont disponible sur le Dashboard du service d'authentification (Auth0)

### QU-139
**Vous assurez vous régulièrement que les services de sécurité mis en œuvre par des prestataires ou fournisseurs de services de gestion ou d'administration du parc de postes utilisateurs sont effectivement assurés par lesdits prestataires ou fournisseurs ?**

Les services de sécurités sont effectués automatiquement par les providers que nous avons choisi (AWS Lambda, AWS Aurora, Firebase, Auth0). Nous n'avons pas d'autres fournisseurs.

### QU-143
**Avez vous établi une politique de sécurité et des recommandations relatives au travail en dehors des locaux de l'entreprise ?**

La politique de sécurité est la même dans les locaux ou en dehors ou en télétravail.
L'accès au code et aux serveurs est possible uniquement pour les développeurs ayant une clé SSH autorisée.

### QU-144
**Avez-vous établi une politique de sécurité et des recommandations relatives au télétravail (avec connexion au réseau de l'entreprise) ?**

Oui, voir ci-dessus.

### QU-145
**En avez-vous déduit une politique de sécurité relative à l'utilisation d'équipements personnels tels que ordinateurs portables, assistants numériques personnels (ANP ou PDA), disques externes, supports optiques, clés USB, etc. dans le cadre du travail ?**

Non, les développeurs doivent sécuriser l'accès à leur machine, leur clé ssh et leur compte google. Les données (code, data ou clés) sont transmises via Github, AWS, Firebase et ne doivent pas être transmises via des périphériques portables.

### QU-152
**Avez-vous défini une politique afin de lutter contre les risques d'attaque par des codes malveillants (virus, chevaux de Troie, vers, etc.) : interdiction d'utiliser des logiciels non préalablement autorisés, mesures de protection lors de la récupération de fichiers via des réseaux externes, revues de logiciels installés ?**

Non, en cas de doute sur un système d'exploitation, nous avons une procédure de remise à zéro et de configuration initiale. Il faut aussi recréer une clé SSH et renouveler le mot de passe Google en cas de doute sur leurs intégrités.

### QU-155
**Avez-vous défini une politique et des mesures de protection pour lutter contre des codes exécutables (applets, contrôles activeX, etc.) non autorisés (blocage ou contrôle de l'environnement dans lequel ces codes s'exécutent, contrôle des ressources accessibles par les codes mobiles, authentification de l'émetteur, etc.) ?**

Oui, les codes sont exécutés dans des environnements très isolés (AXS Lambda).
Le code de toutes les versions est facilement inspectable et aucun autre code ne tourne sur les serveurs.

### QU-160
**Avez-vous défini et mis en place une politique de contrôles périodiques et de veille SSI ?**

Oui, la recherche et la veille sont effectué de manières régulières par chacun des membres de l'équipe 100m. L'ensemble de l'architecture est revu et mis à jour dans son intégralité 2 fois par ans et les résultats de la veille appui les nouveaux choix technologiques.

### QU-163
**Avez-vous défini et mis en place une politique plan d'audit et des contrôles annuel ?**

Non, nous n'avons pas d'audit externe pour le moment.

### QU-164
**Avez-vous défini et mis en place une politique de mise en conformité technique ?**

Non cependant si nous sommes au courant d'une non-conformité, la tâche est affectée en priorité pour l'équipe de développement.
