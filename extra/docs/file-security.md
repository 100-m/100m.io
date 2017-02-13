# Security

### Authentication
#### Private Access
Private services are only accessible by 100m developpers with a Two-Factor Authentication:
- Google Suite (GMail - Firebase) - 3 user/admin accounts
- Amazon Web Services - 1 admin account + 1 db admin account
- Cloudflare - 1 admin account
- Github - 3 user/admin accounts + 3 ssh keys (with passphrase)

#### Public/API Access
- All authenticated users request a Token from Auth0 + a Firebase Token
- Auth0 access Token is used

### Database
Data stored in Firebase are dynamic or application related and non-business critical. (Text, Translation, Screenshare...). Firebase suse it's own token & authentication system.

Data stored in AWS Aurora are financial and business critical. The database cluster is composed of 2 databases, on master with read/write access and one replicated with 1s latency and only read access. Requests are done through a small request layer using Auth0 Token and 100m authorization layer.

### Hosting
All code is hosted in AWS Lambda for logs/backup/security.
Current Modules: ETL, Request Layer, Message, PDF
