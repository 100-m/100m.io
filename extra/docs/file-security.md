# Security

This document explains code security at 100m.io for the asset manager and wealth manager cloud based platforms.  
This document is divided into 3 main parts: **Authentication**, **Data** and **Hosting**.  
It also includes some information about internal security: **Company structure**, **Access Administration**

---

### Authentication

All users logs in to Auth0 through a Login Page. They request a JWT Token that will be used for every backend + a Firebase Token.  
All users receive a role post authentication, by default **USER**.  
User roles are created per application and are dynamic (as many roles per application and as many read/write rules per role).

### Database
Data stored in Firebase are dynamic or application related and non-business critical. (Text, Translation, Screenshare...). Firebase suse it's own token & authentication system.

Data stored in AWS Aurora are financial and business critical. The database cluster is composed of 2 databases, on master with read/write access and one replicated with 1s latency and only read access. Requests are done through a small request layer using Auth0 Token and 100m authorization layer.

### Hosting
All code is hosted in AWS Lambda for logs/backup/security.
Current Modules: ETL, Request, Compute, Message, PDF.
Frontend code as well as backend services are accessed through HTTPS only.

---

### Company structure
Roles:
- Cloud, Hosting Security > Valentin Brajon
- Data Structure, Data access > Clément Miglietti, Valentin Brajon
- Code Access - Data Model Algorithm > Clément Miglietti
- Code Access - Proprietary 100m Code > Valentin Brajon
- Physical Access > Clément Miglietti

### Access Administration
Private services are only accessible by 100m developers with a Two-Factor Authentication:
- Google Suite (GMail - Firebase) - 3 user/admin accounts
- Amazon Web Services - 1 admin account + 1 db admin account
- Cloudflare - 1 admin account
- Github - 3 user/admin accounts + 3 ssh keys (with passphrase)

### Incidents
- Frontend and Backend code exceptions **are monitored** and will automatically notify **support@100m.io**.
- DDOS attempts **are catched** by Cloudflare and will automatically notify **support@100m.io**.
- Suspect Backend connections or attempts can be monitored at a proxy level or a software level via solutions like Sqreen but **are not monitored** at this moment.
- APIs and Batches **are monitored** and expose searchable logs + will automatically notify **support@100m.io** on uncommon log pattern.
- The procedure for any reports (issues, incidents, crisis) is to contact **support@100m.io** with the corresponding report type.
- Every Team Members are notified by **support@100m.io** emails and will analyse the issues, respond with an ETA and coordinate internally the issue.


<footer>
  <grid>
    <div col="1/2">
      Created by <strong>Valentin Brajon</strong> from <strong><a att href="https://100m.io" target="_blank">100M S.A.S.</a></strong>
    </div>
    <div col="1/2" txt="r">
      Last Update <strong>Q1 2017</strong> - <a att href="https://github.com/100-m/100m.io/commits/master/extra/docs/file-security.md" target="_blank">Versions</a> - <a att href="https://100m.io/extra/markdown.html#docs/file-security.md" target="_blank">Link</a>
    </div>
  </grid>
</footer>