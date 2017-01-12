# Architecture

### Parts:

1. Frontend - Code on Github
2. Backend CDN+DNS+HTTPS - Cloudflare
3. Backend Authentication - Auth0
4. Backend Database - Firebase
5. Backend 100m Normalizing - AWS Lambda
6. Backend 100m Computing - AWS Lambda + API Gateway
7. Backend 100m Messaging - AWS Lambda + API Gateway
8. Backend 100m PDF - AWS Lambda + API Gateway

### Choices:

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

1. User request 100m App through HTTPS (Cloudflare CDN)
2. User log in to 100m App through Auth0
3. User receive a Secure Token
4. User send the Secure Token to DB or Backends

![Architecture Schema](https://100m.io/extra/docs/schema-architecture.png)
