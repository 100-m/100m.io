# 100M Security Policy and Implementation

This document details 100M general security policies.  

This document is divided into 2 parts: a generic section that addresses our **incident resolution** procedure and a sensitive topics section that details policy and technical choices for topics deemed 'security sensitive' such as **Authentication**, **Data** and **Hosting**.  

---
## Generic Incident Resolution
The section details how the 100M organization is organized to efficiently address incidents and in a reliable way.



### Notification and Alert Dispatching
**Dispatcher**: the Dispatcher's responsability is to route requests for support, alerts, and other notifications to the Project Key Contact. 

The person responsible for dispatching is Vincent Despeisse. In case of Vincent's absence, Valentin should take responsability for dispatching.

### Project Key Contact
A dedicated 100m team member aka a **'project key contact'** is assigned on each project to coordinate information.

Each subject or topic is assigned a 'key person' in charge.  
The 'default person in charge' is Clement Miglietti, with Valentin Brajon as a back-up.

The "project key contact list" is maintained up-to-date by Clement Miglietti, on a monthly basis. In case of Clement's absence, Valentin Brajon shall maintain the list and ensure it is up to date.

**project key contact list**

| Subject                             | In charge         |
|:------------------------------------|:------------------|
| Cloud, Hosting Security             | Valentin Brajon   |
| Data Structure                      | Valentin Brajon   |
| Data access                         | Clément Miglietti |
| Code Access - Data Model Algorithm  | Clément Miglietti |
| Code Access - Proprietary 100m Code | Valentin Brajon   |
| Physical Access                     | Clément Miglietti |
| Other                               | Clément Miglietti |

### Resolution
Once notified on **support@100m.io**, the dispatcher should coordinate with the project key contact who will:
  - reply internally with a report status (bug, issue, incident, crisis) and project name.
  - reply to the client with an Estimated Time of Resolution or an Acknowledgement.
  - treat the issue or coordinate the resolution with other team members.
  - send a status update notification and confirm resolution with the client.  

Once notified, it is the 'project key contact' to ensure correct handling and resolution of a request, alert or incident.

### Service Continuity
Management will ensure that key roles (eg. Dispatching) are filled and adapt vacation schedule in consequences.


## Security Sensitive Topics And Infrastructure Monitoring

Topics deemed sensitive have specific policies and rules, as described below.

### Authentication

**Objective**: The authentication service goal is to control information access and grant access only to authorized content for each user role.
####  Access Administration
Private services are only accessible by 100m developers with a Two-Factor Authentication:
- **Google** Suite (Firebase, GTM, GA, GMail) - 1 user account per 100m member
- **Amazon Web Services** - 1 admin account + 1 subaccount per projects
- **Cloudflare** - 1 admin account + 1 API Token
- **Github** - 1 user account + 1 ssh keys (with passphrase) per developer

#### User Management
User and Roles Creation is handled exclusively by the **Project Key Contact**.  
Each User Role represents specific Read-Write rules that are defined by the Project Key Contact according to the client needs during a development cycle.  
Users log in to Auth0 through a Login Page and receive a Token used for every backend request.  

### Database

**Objectives**: The Database allows to structure the Data and guarantees availability, backups and transaction and activity logs.

#### Dynamic Data
Data stored in Firebase is dynamic or application related and non-business critical. (Text, Translation, Screenshare...). Firebase uses it's own token & authentication system.

Firebase is backed up weekly automatically.

#### Financial Data
Data stored in AWS Aurora is financial and business critical. The database cluster is composed of 2 databases, one master with read/write access and one replicated with 1s latency and only read access. Requests are done through a small request layer using Auth0 Token and a 100m authorization layer.

AWS Aurora is backed up weekly automatically (one snapshot) and can be rolled back to any time in the last week. The rollback procedure lasts several hours.

### Hosting

**Objective**: Server hosting exposes the frontend application and computation functions.

All code is hosted in AWS Lambda for logs/backup/security.  
Current Modules: ETL, Request, Compute, Message, PDF.  
Frontend code as well as backend services are accessed through HTTPS only.

Each deployed version are backed up on AWS Lambda. Frontend source code is available on Github and Frontend deployed files are available on another branch on Github Pages.

### Current Monitoring System
- Frontend and Backend code exceptions **are monitored**.
- API calls and Batch runs **are monitored**.
- DDOS attempts **are caught** by Cloudflare.
- Suspect Backend connections or attempts **are not monitored**, proxy rules can be created if needed or a software level via solutions like Sqreen can be installed if needed.
- The procedure for any reports (bug, issue, incident, crisis) is to contact **support@100m.io** with the corresponding report type.

Monitored systems expose searchable logs and notify **support@100m.io** about uncommon behavior.

---

<footer>
  <grid>
    <div col="1/2">
      Created by <strong>Valentin Brajon</strong> from <strong><a att href="https://100m.io" target="_blank">100M S.A.S.</a></strong>
    </div>
    <div col="1/2" txt="r">
      Last Update <strong>Q1 2017</strong> - <a att href="https://github.com/100-m/100m.io/commits/master/extra/docs/file-security.md" target="_blank">Versions</a> - <a att href="https://100m.io/extra/markdown.html?docs/file-security.md" target="_blank">Link</a>
    </div>
  </grid>
</footer>