<style>
html { font-family: Lato; }
body { font-size: 1.6rem; }
h1 { font-size: 2em;line-height: 1.33;margin: 30px 0; }
em { font-style: normal;border-bottom: 3px solid #fd4; }
section { position: relative; }
header, .home { color: white;font-weight: 700; }
.multi-device { display: none; }
.bg { position: absolute; }
@media (min-width: 1000px){
  body { font-size: 1.8rem; }
  h1 { font-size: 3em; }
}
.ellipse {
  border-radius: 1000px;
  width: 99.5px;
  height: 99.5px;
  background-color: #ffffff;
  box-shadow: 0 24px 49px 0 rgba(34, 49, 79, 0.23);
  background-image: url("/img/smart-icon.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
  margin-bottom: 30px;
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
    <div v-html="t.our_difference"></div>
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

  <section class="product" column>
    <h2 v-html="t.product" txt=c></h2>
    <div row>
      <div f1 center>
        <img src="/img/product.png"/>
      </div>
      <div f1>
        <div class="ellipse"></div>
        <h3 v-html="t.reporting_title"></h3>
        <div v-html="t.reporting_subtitle"></div>
        <div v-html="t.reporting_text"></div>
      </div>
    </div>
  </section>

  <section class="use_case">
  </section>

  <section class="our_difference">
  </section>

  <section class="client">
  </section>

  <section class="contact">
  </section>

  <footer>
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
          product: "<em>Produits</em>",
          use_case: "XXX",
          our_difference: "XXX",
          client: "XXX",
          team: "XXX",
          reporting_title: "100M reporting",
          reporting_subtitle: "Un outil de production flexible",
          reporting_text: "Gérez simplement le reporting des fonds de tout type, avec un support multilingue et multi juridiction. Créez facilement des reportings sur-mesure et soyez réactifs face aux requêtes spécifiques de clients",
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
