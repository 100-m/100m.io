<style>
html { font-family: Lato; }
body { font-size: 1.6rem; }
h1 { font-size: 2em;line-height: 1.33;margin: 30px 0; }
em { font-style: normal;border-bottom: 3px solid #fd4; }
section { position: relative; width:1200px;}
header, .home { color: white;font-weight: 700; }
.multi-device { display: none; }
.bg { position: absolute; }
@media (min-width: 1000px){
  body { font-size: 1.8rem; }
  h1 { font-size: 3em; }
}

@media (max-width: 600px){
  [row] { flex-direction: column }
  [row][reverse] { flex-direction: column-reverse }
}

.icon {
  width: 40px;
  background-color: #fff;
}

.card {
 margin: 15px;
 box-shadow: 0 24px 49px 0 rgba(34, 49, 79, 0.14);
 border-radius: 10px;
}

.card_body {
  padding: 15px;
  padding-bottom: 60px;
}

.product_subtitle {
  color: #707c8b;
  font-weight: bold;
  margin-bottom: 2em;
}

.product_text {
  padding: 10px;
  margin-bottom: 4em;
}

ul {
  padding: 1em;
}

ul li {
  color: #3c3c3c;
  list-style: none;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
}

 ul li::before {
  color: #02b3e0;
  content: "\2022";
  padding-right: 0.7em;
}

.card_body h3 {
  padding-left: 0.8em;
  padding-right: 0.8em;
}

</style>

<template>
<main>
  <img class="bg" src="/img/bg.png" />

  <header row center between>
    <a row href="/" class="logo"><img alt="100M" src="/img/logo.svg" /></a>
    <div v-html="t.home"></div>
    <div v-html="t.product"></div>
    <div v-html="t.use_case"></div>
    <div v-html="t.why_us"></div>
    <div v-html="t.client"></div>
    <!-- <div v-html="t.team"></div> -->
    <router-link :to="{ query: { lang: 'fr' }}">FR</router-link>
    <router-link :to="{ query: { lang: 'en' }}">EN</router-link>
  </header>

  <section class="home">
    <h1 v-html="t.title"></h1>
    <h2 v-html="t.subtitle"></h2>
    <div class="multi-device">
      <img class="desktop" src="/img/desktop.png" />
      <img class="ipad" src="/img/ipad.png" />
      <img class="mobile" src="/img/iphone.png" />
    </div>
  </section>

  <section class="product">
    <h2 txt=c><em  v-html="t.product"></em></h2>
    <div row>
      <div f1 center>
        <img src="/img/product1.png"/>
      </div>
      <div f1 class="product_text">
        <img src="/img/smart-icon1.png" class="icon"/>
        <h3 v-html="t.reporting_title"></h3>
        <div class="product_subtitle" v-html="t.reporting_subtitle"></div>
        <div v-html="t.reporting_text"></div>
      </div>
    </div>

    <div row>
      <div f1 class="product_text">
        <img src="/img/smart-icon2.png" class="icon"/>
        <h3 v-html="t.analytics_title"></h3>
        <div class="product_subtitle" v-html="t.analytics_subtitle"></div>
        <div v-html="t.analytics_text"></div>
      </div>
      <div f1 center>
        <img src="/img/product2.png"/>
      </div>
    </div>

    <div row>
      <div f1 center>
        <img src="/img/product3.png"/>
      </div>
      <div f1 class="product_text">
        <img src="/img/smart-icon3.png" class="icon"/>
        <h3 v-html="t.digital_title"></h3>
        <div class="product_subtitle" v-html="t.digital_subtitle"></div>
        <div v-html="t.digital_text"></div>
      </div>
    </div>
  </section>

  <section class="use_case">
    <img src="/img/bg2.png" />
    <h2><em v-html="t.use_case_title"></em></h2>
    <div v-html="t.use_case_subtitle"></div>
    <div class="cards" row>
      <div f1 class="card">
        <img src="img/card1.png"/>
        <div class="card_body">
          <h3 v-html="t.use_case_card_1_title"></h3>
          <div v-html="t.use_case_card_1_bullet"></div>
        </div>
      </div>
      <div f1 class="card">
        <img src="img/card2.png"/>
        <div class="card_body">
          <h3 v-html="t.use_case_card_2_title"></h3>
          <div v-html="t.use_case_card_2_bullet"></div>
        </div>
      </div>
      <div f1 class="card">
        <img src="img/card3.png"/>
        <div class="card_body">
          <h3 v-html="t.use_case_card_3_title"></h3>
          <div v-html="t.use_case_card_3_bullet"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="why_us">
    <div row>
      <div f1>
        <h2><em v-html="t.why_us_title"></em></h2>
        <h3 v-html="t.why_us_subtitle"></h3>
        <div v-html="t.why_us_text"></div>
      </div>
      <div f1>
        <img src="/img/why-us.png"/>
      </div>
    </div>
  </section>

  <section class="client">
    <h2 txt=c><em v-html="t.client_title"></em></h2>
    <img src="/img/clients.png"/>
  </section>

  <section class="contact">
    <h2><em v-html="t.contact_title"></em></h2>
    <img src="/img/map.png" />
    <div row>
      <div f1>
        <h3 v-html="t.email_title"></h3>
        <div v-html="t.email"></div>
      </div>
      <div f1>
        <h3 v-html="t.phone_title"></h3>
        <div v-html="t.phone"></div>
      </div>
      <div f1>
        <h3 v-html="t.mail_title"></h3>
        <div v-html="t.mail"></div>
      </div>
    </div>
  </section>

  <footer>
    <div v-html="t.footer_text"></div>
  </footer>
</main>
</template>

<script>
export default {
  data() {
    return {
      translation: {
        fr: {
          title: "Une solution digitale<br>pour expliquer<br><em>votre performance.</em>",
          subtitle: "100M simplifie la production du reporting traditionnel,<br> digitalise le suivi de portefeuille et vous aide à mieux<br>communiquer.",
          home: "XXX",
          product: "Produits",
          client: "XXX",
          team: "XXX",
          reporting_title: "100M Reporting",
          reporting_subtitle: "Un outil de production flexible",
          reporting_text: "Gérez simplement le reporting des fonds de tout type, avec un support multilingue et multi juridiction. Créez facilement des reportings sur-mesure et soyez réactifs face aux requêtes spécifiques de clients",
          analytics_title: "100M Analytics",
          analytics_subtitle: "Un moteur de calcul intégré",
          analytics_text: "100M dispose également d’un module de calcul de contribution et attribution de performance. Générez dynamiquement des rapports de date à date",
          digital_title: "100M Digital",
          digital_subtitle: "Une application intuitive pour suivre vos portefeuille",
          digital_text: "Vos clients, vos commerciaux et collaborateurs vous demandent une information simple et claire? Renforcez votre discours en mettant à leur disposition des interfaces conçues pour eux.",
          use_case_title: "Use cases",
          use_case_subtitle: "Une application qui vous accompagne de la gestion à la relation client.",
          use_case_card_1_title: "Performance, Reporting, and Client Service Manager",
          use_case_card_1_bullet: "<ul><li>Automatisez la génération de vos reportings quels que soient la classe d’actifs, la langue ou le disclaimer</li><li>Générez en un clic des reporting sur-mesure pour vos clients institutionnels</li><li>Offrez à vos équipes et clients une valorisation actualisée quotidiennement (si le sous-jacent le permet)</li></ul>",
          use_case_card_2_title: "Portfolio Management",
          use_case_card_2_bullet: "<ul><li>Revenez sur vos performances passées via un outil analytique et visuel</li><li>Améliorez la collaboration interne via un outil de suivi de portefeuille commun à tous</li>",
          use_case_card_3_title: "Sales",
          use_case_card_3_bullet: "<ul><li>Simplifiez vos interactions au quotidien avec les clients existants et augmentez votre taux de rétention</li><li>Soyez réactifs face à des demandes d’informations spécifiques de clients</li><li>Différenciez votre offre et convertissez davantage de prospects</li></ul>",
          why_us_title: "Why us",
          why_us_subtitle: "Vos données centralisées pour une information cohérente",
          why_us_text: "Nous centralisons et historisons l’ensemble de vos données (positions, mouvements, risques et référentiels). Cette même donnée peut ensuite alimenter application digitale, reporting traditionnel et votre site web.",
          client_title: "Our clients",
          contact_title: "Contact",
          footer_text: "© Copyright 100M. All Rights Reserved.",
          email: "contact@100m.io",
          email_title: "Email",
          mail: "Station F – 5 parvis Alan Turing 75013 Paris, France",
          mail_title: "Mail",
          phone: "+33 (0)6 77 73 68 74",
          phone_title: "Phone",
        },
        en: {},
      },
    }
  },
  computed: {
    t() {
      return this.translation[this.$route.query.lang === 'en' ? 'en' : 'fr']
    },
  }
}
</script>
