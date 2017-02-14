# Rebase procedure
```
git init
git remote add origin git@github.com:100-m/<PROJECT>.git
git remote add skeleton git@github.com:100-m/m100-skeleton.git
git fetch skeleton
git rebase -s recursive -X theirs skeleton/master
git push
```

# Init procedure
- Create domain name cloudflare
```
curl -X POST https://api.cloudflare.com/client/v4/zones/0d78a88e0addcbb257f388c00f760201/dns_records -H "Content-Type:application/json" -H "X-Auth-Key:1c3c68d86d62cf72849e77b97d62574614e2d" -H "X-Auth-Email:valentin@100m.io" --data '{"type":"CNAME","name":<DOMAIN-NAME>,"content":"100-m.github.io","proxied":true}
```
- Set up [Firebase](https://console.firebase.google.com/)
- Set up [Auth0](https://manage.auth0.com/#/clients)
- Set up Firebase in Auth0 : [Client > Addons > Firebase](https://firebase.google.com/docs/auth/web/custom-auth#before-you-begin)
- Create gh-pages branch :
```
git branch gh-pages
echo <DOMAIN-NAME> > CNAME
```

- Set package.json variables

# Features
- Component Structure
- Routing
- Auth
- Connector > Firebase
- Chart > Performance / lines+brush+tooltip+rotate
- Chart > Allocation / bar+animation+onmove:highlight+onclick:filter+rotate axis

# Based on / Inspired by
- https://github.com/vuejs/vue + vuex + vue-router + axios
- https://github.com/d3/d3
- https://github.com/palantir/plottable
- https://github.com/andrewplummer/Sugar

- https://github.com/StefanKovac/flex-layout-attribute
- https://github.com/dhg/Skeleton/blob/master/css/skeleton.css
- https://github.com/google/material-design-lite
- https://github.com/ant-design/ant-design
