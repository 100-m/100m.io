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

  <section class="product">
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
          product: "XXX",
          use_case: "XXX",
          our_difference: "XXX",
          client: "XXX",
          team: "XXX",
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
