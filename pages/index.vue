<style>
html { font-family: Lato; }
body { font-size: 1.6rem; }
h1 { font-size: 2em;line-height: 1.33;margin: 30px 0; }
em { font-style: normal;border-bottom: 3px solid #fd4; }
section { position: relative; width:1200px;}
header, .home { color: white;font-weight: 700; }
header {margin-top: -800px; padding: 1em; text-align: right;}
@media (min-width: 1000px){
  body { font-size: 1.8rem; }
  h1 { font-size: 3em; }
}
footer {padding: 3em; border-top: 1px solid rgb(238,239,241); color: #61676e;}

a:before {
  width: 0;
}

.logo img {
  margin-left: 3em;
  width: 150px;
}

.menu {
  text-transform: uppercase;
  font-weight: 400;
  padding-top: 5px;
  text-align: right;
  margin-left: auto;
  font-size: 14px;
}

.menu ul {
  display: inline;
  list-style: none;
  text-align: right;
  padding-right: 30px;
}

.menu li {
  display: inline-block;
  padding: 0px 15px;
}

.lang li {
  font-weight: 600;
  padding: 0px 5px;
}

.bg {
  height: 800px;
  min-width: 100%;
}

.multi-device {
  position: relative;
}

.multi-device .desktop {
  margin: 10%;
  width: 80%;
  position: absolute;
  bottom: 0;
}

.ipad {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 60%;
  z-index: 3;
}

.mobile {
  width: 20%;
  z-index: 4;
  position: absolute;
  bottom: 0;
  right: 50%;
}

.icon {
  width: 40%;
  background-color: #fff;
}

.home {
  padding-top: 5em;
}

.home_body {
  padding-left: 10px;
}

.home h2 {
   color: #90cfff;
   font-weight: 400;
   font-size: 21px;
}

.card {
 margin: 15px;
 box-shadow: 0 24px 49px 0 rgba(34, 49, 79, 0.14);
 border-radius: 10px;
 background-color: #fff;
}

.card_body {
  padding: 15px;
  padding-bottom: 60px;
}

.product {
    margin-top: 150px;
    background-image: url('/img/bg-product.png');
    background-size: 100%;
}

.product_subtitle {
  color: #707c8b;
  font-weight: bold;
  margin-bottom: 2em;
}

.product_text {
  margin-bottom: 4em;
  margin-left: 40px;
  margin-right: 40px;
}

.product_image {
  margin-left: 60px;
  margin-right: 60px;
}

.right_icon {
  margin-left: calc(100%-100px);
}

.use_case ul {
  padding: 1em;
}

.use_case ul li {
  color: #3c3c3c;
  list-style: none;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
}

 .use_case ul li:before {
  color: #02b3e0;
  content: "\2022";
  padding-right: 0.7em;
}

.card_body h3 {
  padding-left: 0.8em;
  padding-right: 0.8em;
  color: #000;
}

h2 {
  margin-bottom: 1.5em;
}

.circle_icon {
  width: 100px;
	height: 100px;
	box-shadow: 0 24px 49px 0 rgba(34, 49, 79, 0.23);
  position: relative;
  border-radius: 100px;
  margin-bottom: 60px;
  background: white;
}

[white] {
  color: #fff;
}

.use_case_section {
  margin-top: -407px;
}

.use_case_subtitle {
  margin-bottom: 50px;
}

.background_img_overlap {
  min-width: 100vw;
  height: 400px;
}

.why_us {
    background-image: url('/img/bg-why-us.png');
    background-repeat: no-repeat;
    background-size: 50%;
}

.client {
  background-color: rgb(239,242,247);
}

.contact {
  padding-top: 4em;
}

.contact_body {
  margin-top: 3em;
  padding-left: 3em;
  padding-right: 3em;
}

.bg-mobile {
  display: none;
}

#map {
  height: 50%;
  min-height: 600px;
  width: 100%;
}

@media (max-width: 600px){
  [row] { flex-direction: column }
  [row][reverse] { flex-direction: column }
  [txt=r] {text-align: left}
  .right_icon {margin-left: 0}
  .product_image {margin: 0}
  .product {background: none;margin-top: 10px;}
  .product_text {margin: 0; margin-top: 40px; margin-bottom: 20px;}
  .multi-device {min-height: 300px}
  .card {margin-left: 0; margin-right: 0;}
  .navi {display: none !important;}
  .logo img {margin: 0;}
  .home {padding-top: 0;}
  .home_body h1 {margin-top: 0}
  .bg {display: none;}
  .bg-mobile {display: block; height: 700px;}
  .circle_icon {height: 80px; width: 80px; margin: 0 auto; margin-bottom: 40px; box-shadow: 0 15px 24px 0 rgba(34, 49, 79, 0.23);}
  header {margin-top: -690px; text-align: center}
  #map { min-height: 90vw;}
}

@media (max-width: 900px){
  #map { min-height: 50vw;}
}

</style>

<template>
<main>
  <img class="bg" src="/img/bg.png"/>
  <img class="bg-mobile" src="/img/bg-mobile.png"/>

  <header row>
    <a href="/" class="logo"><img alt="100M" src="/img/logo.svg" /></a>
    <span class="menu">
      <ul class="navi">
        <a href="#home"><li v-html="t.home"></li></a>
        <a href="#product"><li v-html="t.product"></li></a>
        <a href="#use_case"><li v-html="t.use_case_title"></li></a>
        <a href="#why_us"><li v-html="t.why_us_title"></li></a>
        <a href="#client"><li v-html="t.client_title"></li></a>
        <!-- <a href="#"><li v-html="t.team"></li></a> -->
      </ul>
      <ul class="lang">
        <li><router-link :to="{ query: { lang: 'fr' }}">FR</router-link></li>
        <li><router-link :to="{ query: { lang: 'en' }}">EN</router-link></li>
      </ul>
    </span>
  </header>

  <section id="home" class="home" row>
    <div f1 class="home_body">
      <h1 v-html="t.title"></h1>
      <h2 v-html="t.subtitle"></h2>
    </div>
    <div f1 class="multi-device">
      <img class="desktop" src="/img/desktop.png" />
      <img class="ipad" src="/img/ipad.png" />
      <img class="mobile" src="/img/iphone.png" />
    </div>
  </section>

  <div id="product" class="product">
    <section>
      <h2 txt=c><em  v-html="t.product"></em></h2>
      <div row reverse>
        <div f1 class="product_text">
          <div row center class="circle_icon">
            <img src="/img/smart-icon1.png" class="icon"/>
          </div>
          <h3 v-html="t.reporting_title"></h3>
          <div class="product_subtitle" v-html="t.reporting_subtitle"></div>
          <div v-html="t.reporting_text"></div>
        </div>
        <div f1 center class="product_image">
          <img src="/img/product1.png"/>
        </div>
      </div>

      <div row txt=r>
        <div f1 class="product_text">
          <div row center class="circle_icon right_icon">
            <img src="/img/smart-icon2.png" class="icon"/>
          </div>
          <h3 v-html="t.analytics_title"></h3>
          <div class="product_subtitle" v-html="t.analytics_subtitle"></div>
          <div v-html="t.analytics_text"></div>
        </div>
        <div f1 center class="product_image">
          <img src="/img/product2.png"/>
        </div>
      </div>

      <div row reverse>
        <div f1 class="product_text">
          <div row center class="circle_icon">
            <img src="/img/smart-icon3.png" class="icon"/>
          </div>
          <h3 v-html="t.digital_title"></h3>
          <div class="product_subtitle" v-html="t.digital_subtitle"></div>
          <div v-html="t.digital_text"></div>
        </div>
        <div f1 center class="product_image">
          <img src="/img/product3.png"/>
        </div>
      </div>
    </section>
  </div>

  <div id="use_case" class="use_case">
    <img src="/img/bg2.png" class="background_img_overlap"/>
    <section class="use_case_section" white>
      <h2><em v-html="t.use_case_title"></em></h2>
      <div v-html="t.use_case_subtitle" class="use_case_subtitle"></div>
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
  </div>

  <div id="why_us" class="why_us">
    <section row>
      <div f1 class="why_us_body">
        <h2><em v-html="t.why_us_title"></em></h2>
        <h3 v-html="t.why_us_subtitle"></h3>
        <div v-html="t.why_us_text"></div>
      </div>
      <div f1>
        <img src="/img/why-us.png"/>
      </div>
    </section>
  </div>

  <div id="client" class="client">
    <section>
      <h2 txt=c><em v-html="t.client_title"></em></h2>
      <img full src="/img/bg-clients.png" />
    </section>
  </div>

  <section id="contact" class="contact">
    <h2 txt=c><em v-html="t.contact_title"></em></h2>
    <div id="map" full></div>
    <div row class="contact_body">
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
          home: "Accueil",
          product: "Produits",
          team: "L'équipe",
          reporting_title: "100M Reporting",
          reporting_subtitle: "Un outil de production flexible",
          reporting_text: "Gérez simplement le reporting des fonds de tout type, avec un support multilingue et multi juridiction. Créez facilement des reportings sur-mesure et soyez réactifs face aux requêtes spécifiques de clients.",
          analytics_title: "100M Analytics",
          analytics_subtitle: "Un moteur de calcul intégré",
          analytics_text: "100M dispose également d’un module de calcul de contribution et attribution de performance. Générez dynamiquement des rapports de date à date.",
          digital_title: "100M Digital",
          digital_subtitle: "Une application intuitive pour suivre vos portefeuille",
          digital_text: "Vos clients, vos commerciaux et collaborateurs vous demandent une information simple et claire? Renforcez votre discours en mettant à leur disposition des interfaces conçues pour eux.",
          use_case_title: "Use cases",
          use_case_subtitle: "Une application qui vous accompagne de la gestion à la relation client.",
          use_case_card_1_title: "Performance, Reporting, et Manager Service Client",
          use_case_card_1_bullet: "<ul><li>Automatisez la génération de vos reportings quels que soient la classe d’actifs, la langue ou le disclaimer</li><li>Générez en un clic des reporting sur-mesure pour vos clients institutionnels</li><li>Offrez à vos équipes et clients une valorisation actualisée quotidiennement (si le sous-jacent le permet)</li></ul>",
          use_case_card_2_title: "Suivi de portefeuille",
          use_case_card_2_bullet: "<ul><li>Revenez sur vos performances passées via un outil analytique et visuel</li><li>Améliorez la collaboration interne via un outil de suivi de portefeuille commun à tous</li>",
          use_case_card_3_title: "Comerciaux",
          use_case_card_3_bullet: "<ul><li>Simplifiez vos interactions au quotidien avec les clients existants et augmentez votre taux de rétention</li><li>Soyez réactifs face à des demandes d’informations spécifiques de clients</li><li>Différenciez votre offre et convertissez davantage de prospects</li></ul>",
          why_us_title: "Pourquoi nous",
          why_us_subtitle: "Vos données centralisées pour une information cohérente",
          why_us_text: "Nous centralisons et historisons l’ensemble de vos données (positions, mouvements, risques et référentiels). Cette même donnée peut ensuite alimenter application digitale, reporting traditionnel et votre site web.",
          client_title: "Nos clients",
          contact_title: "Contact",
          footer_text: "© Copyright 100M. All Rights Reserved.",
          email: "contact@100m.io",
          email_title: "Email",
          mail: "Station F – 5 parvis Alan Turing 75013 Paris, France",
          mail_title: "Adresse",
          phone: "+33 (0)6 77 73 68 74",
          phone_title: "Téléphone",
        },
        en: {
          title: "A digital solution <br>to explain<br><em>your performance.</em>",
          subtitle: "100M simplifies traditional reporting,<br> digitalizes portfolio monitoring and helps you to better <br>communicate.",
          home: "Home",
          product: "Product",
          team: "Team",
          reporting_title: "100M Reporting",
          reporting_subtitle: "A flexible reporting tool",
          reporting_text: "Easily manage fund reporting of any kind, with multi-language and multi-jurisdiction support. Easily create taylored reporting and be reactive for specific client requests.",
          analytics_title: "100M Analytics",
          analytics_subtitle: "Integrated calculation engine",
          analytics_text: "100M also has a calculation engine for contribution and performance attribution. Dynamically generate reports for custom dates.",
          digital_title: "100M Digital",
          digital_subtitle: "An intuitive app to monitor your portfolio",
          digital_text: "Your clients, sales and collaborators are asking for simple and clear information? Strengthen your pitch by providing them with taylored interfaces.",
          use_case_title: "Use cases",
          use_case_subtitle: "An app that follows you from decision making to customer relationship",
          use_case_card_1_title: "Performance, Reporting, and Client Service Manager",
          use_case_card_1_bullet: "<ul><li>Automate your report generation, no matter the asset class, the language or the disclaimer.</li><li>Generate in one click taylored reports for your institutional clients.</li><li>Offer a daily actualized valuation to your teams and clients (if the underlying allows it).</li></ul>",
          use_case_card_2_title: "Portfolio Management",
          use_case_card_2_bullet: "<ul><li>Go back on your past performances through a visual and analytic tool.</li><li>Improve internal collaboration thanks to a shared portfolio monitoring tool.</li>",
          use_case_card_3_title: "Sales",
          use_case_card_3_bullet: "<ul><li>Simplify your daily interaction with external clients and increase your retention.</li><li>Be reactive for specific client requests</li><li>Differenciate your offer and convert more prospects</li></ul>",
          why_us_title: "Why us",
          why_us_subtitle: "Your data centralized for coherent information",
          why_us_text: "We centralize and keep track of all your data (positions, movements, risks and reference data). The same data can then feed digital application, traditional reporting and your website.",
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
