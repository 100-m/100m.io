# Architecture

This document explains server architecture at 100m.io for the asset manager and wealth manager cloud based platforms.

This document is focused on making exhaustive lists about:
  - Hosting: apis, code and database names and locations
  - Structure: choices
  - Third party: choices, advantages

---

### Hosting:

1. Frontend - Code on Github
2. Backend CDN+DNS+HTTPS - Cloudflare
3. Backend Authentication - Auth0
4. Backend Database - Firebase
5. Backend Database - AWS Aurora/MySQL
6. Backend 100m ETL - Private (AWS Lambda + AWS Step Function)
7. Backend 100m Workflow - Public/Secure (AWS Lambda + AWS Step Function + API Gateway)  
  Modules: Compute / Message / PDF

### Structure Choices:

- Frontend code is static (No Backend Templating)
- Frontend code is packed + versionned during deployment
- Frontend code is hosted on a **CDN** to improve performances
- Frontend code uses **HTTPS** ressources **only** (redirect from HTTP to HTTPS)
- Frontend code does not contain secret keys or secure data in source code
- Frontend code uses a token when requesting secure data
- Auth0 provide a **Secure Token** (JWT) that can be passed on to other backends to ensure identity + a **Firebase Token** (through Delegation)
- Auth0 store credentials and roles only
- Firebase contains **security rules** based on user roles
- Firebase allows read or write according to security rules
- Backend Normalizing pull data from client IT system
- Backend Normalizing **extract,transform and load** data into Firebase
- Backend Normalizing is used by 100m only and not exposed
- Backend Computing requests data from Firebase, compute Financial Models and output data for graphs/tables
- Backend Computing uses Firebase Token and can't access to unauthorized data
- Backend Messaging sends email/sms/push notifications
- Backend Messaging uses security rules configurable in Firebase
- Backend PDF uses client Token to generates a PDF

### Schema:

There are 2 different use cases illustrated:
1. Server to server data loading (Step S1 & S2)
2. Client to server app usage (Step 1 to 4)  

![Architecture Schema](https://100m.io/extra/docs/schema-architecture.png)

- Step S1 - 100m Normalizing Service extracts data from client Finance Server or client data exchange system
- Step S2 - 100m Normalizing Service transforms, cleans, adapts and then loads data into Firebase
- Step 1 - User requests 100m App through HTTPS (Cloudflare CDN)
- Step 2 - User logs in to 100m App through Auth0
- Step 3 - User receives a Secure Token
- Step 4 - User sends the Secure Token to DB or Backends

### Third Party:

- Google - Firebase
  - Secure/Reliable/Fast
  - Backup system
  - Synchronisation between users
  - Logs/Usage stats
- Amazon - AWS Lambda
  - Secure/Reliable/Fast
  - Minimal code focus on business
  - Logs/Usage stats
- Auth0
  - Single purpose, security
  - Integrate with many Providers
  - Integrate with SSO
  - Private cloud option
  - Logs/Usage stats

<footer>
  <grid>
    <div col="1/2">
      Created by <strong>Valentin Brajon</strong> from <strong><a att href="https://100m.io" target="_blank">100M S.A.S.</a></strong>
    </div>
    <div col="1/2" txt="r">
      Last Update <strong>Q1 2017</strong> - <a att href="https://github.com/100-m/100m.io/commits/master/extra/docs/file-architecture.md" target="_blank">Versions</a> - <a att href="https://100m.io/extra/markdown.html?docs/file-architecture.md" target="_blank">Link</a>
    </div>
  </grid>
</footer>
