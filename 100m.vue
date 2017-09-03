<style>
@import './css/raw.css';

section, header, footer { margin: auto;max-width: var(--size-tablet);width: 96%; }
@media (max-width: 1000px){section, header, footer { max-width: 80%; }}

header ul {
  margin-left: auto;
  padding: 0;
  list-style: none;
}
</style>

<template>
<main>
  <header row>
    <a href="/" class="logo">100M</a>
    <ul row>
      <li><a onclick="drift.api.openChat()" v-text="t.product"></a></li>
      <li><a onclick="drift.api.openChat()" v-text="t.team"></a></li>
      <li><a onclick="drift.api.openChat()" v-text="t.join_us"></a></li>
      <li><a onclick="drift.api.openChat()" class="button" v-text="t.contact"></a></li>
      <li v-if="lang==='fr'"><a class="lang-en" @click="lang='en'">EN</a></li>
      <li v-if="lang==='en'"><a class="lang-fr" @click="lang='fr'">FR</a></li>
    </ul>
  </header>

  <section>
    <h1 v-html="t.title"></h1>
    <h2 v-html="t.subtitle"></h2>
    <div class="img-home"></div>
  </section>

  <section>
    <h2 v-html="t.revolution_100m"></h2>
    <div class="block">
      <h3 v-html="before_100m"></h3>
      <span v-html="before_100m_subtext"></span>
      <img src="/img/step1_img1.png" />
    </div>
    <div class="block">
      <h3 v-html="after_100m"></h3>
      <span v-html="after_100m_subtext"></span>
      <img src="/img/step1_img2.png" />
    </div>
  </section>

  <section>
    <h2 v-html="t.expertise_100m"></h2>
    <span v-html="t.expertise_100m_subtext"></span>
    <div class="block">
      <img src="/img/step2_icon1.png" />
      <h3 v-html="t.data_process"></h3>
      <span v-html="t.data_process_subtext"></span>
    </div>
    <div class="block">
      <img src="/img/step2_icon2.png" />
      <h3 v-html="t.risk_performance"></h3>
      <span v-html="t.risk_performance_subtext"></span>
    </div>
    <div class="block">
      <img src="/img/step2_icon3.png" />
      <h3 v-html="t.user_experience"></h3>
      <span v-html="t.user_experience_subtext"></span>
    </div>
    <div class="img-desktop-mobile"></div>
  </section>

  <section>
    <h2 v-html="t.create_user_experience"></h2>
    <div class="block">
      <img src="/img/icon-gestion.png" />
      <h3 v-html="t.portfolio_management"></h3>
      <span v-html="t.portfolio_management_subtext"></span>
    </div>
    <div class="block">
      <img src="/img/icon-risque.png" />
      <h3 v-html="t.risks"></h3>
      <span v-html="t.risks_subtext"></span>
    </div>
    <div class="block">
      <img src="/img/icon-commercial.png" />
      <h3 v-html="t.sales"></h3>
      <span v-html="t.sales_subtext"></span>
    </div>
    <div class="block">
      <img src="/img/icon-service-client.png" />
      <h3 v-html="t.investor_relationship"></h3>
      <span v-html="t.investor_relationship_subtext"></span>
    </div>
  </section>

  <section>
    <h2 v-html="t.know_more"></h2>
    <a onclick="drift.api.openChat()" v-text="t.ask_demo"></a>
  </section>

  <footer>
    <h4>Follow</h4>
    <div row class="social-media">
      <a target="_blank" href=""><img src="/img/icon-twitter.png" class="icon" /></a>
      <a target="_blank" href=""><img src="/img/icon-facebook.png" class="icon" /></a>
      <a target="_blank" href="https://www.linkedin.com/company-beta/11049391/"><img src="/img/icon-linkedin.png" class="icon" /></a>
    </div>
    <div class="copyright" v-html="copyright"></div>
    <div class="footer" v-html="footer"></div>
  </footer>
</main>
</template>

<script>
export default {
  data() {
    return {
      lang: 'fr',
      translation: {
        fr: {
          product: "Produit",
          team: "Equipe",
          join_us: "Rejoignez-Nous",
          contact: "Contact",
          title: "Digitalisez le suivi de portefeuille.<br>Transformez <em>l'expérience client</em>",
          subtitle: "Offrez à votre client un outil de reporting entièrement digitalisé.",
          revolution_100m: "La Révolution 100M",
          before_100m: "AVANT 100M",
          after_100m: "APRES 100M",
          expertise_100m: "Notre Expertise",
          expertise_100m_subtext: "100M vous permet de suivre à tout moment votre positionnement et votre<br>performance, et de les communiquer auprès de vos clients de manière intéractive.",
          data_process: "Traitement de la Donnée",
          data_process_subtext: "100M se connecte directement sur les flux de données du dépositaire et d'autres fournisseurs, et génère une donnée entièrement fiabilisée.",
          risk_performance: "Risques et Attribution de Performance",
          risk_performance_subtext: "100M traite la donnée pour générer une anaylyse dynamique, granulaire et limpide du risque et de la performance.",
          user_experience: "Expérience Utilisateur",
          user_experience_subtext: "Le client accéde à l'interface sur desktop ou tablette, peut générer ses PDF ou encore communiquer avec vous à distance via l'option d'écran partagé.",
          create_user_experience: "Une Expérience Utilisateur Différenciante",
          portfolio_management: "Gestion",
          portfolio_management_subtext: "Suivez votre performance au quotidien.<br>Disposez d'un outil d'analyse entièrement paramétrable.",
          risks: "Risks",
          risks_subtext: "Guarantee data quality.<br>Improve operational limit monitoring.",
          risks: "Risques",
          risks_subtext: "Garantissez la qualité des données.<br>Améliorez le suivi opérationnel des limites.",
          sales: "Commercial",
          sales_subtext: "Différenciez votre offre.<br>Mettez en évidence vos choix stratégiques.",
          investor_relationship: "Opérationnel",
          investor_relationship_subtext: "Diminuez le temps et le coût accordés au reporting.<br>Générez un reporting en continu.",
          know_more: "Vous souhaitez en savoir davantage?",
          ask_demo: "Demandez une demo",
          copyright: "100M, 62 rue Jean-Jacques Rousseau, Paris, France.<br>&copy;2017, tous droits réservés.",
          footer: "",
          before_100m_subtext: "",
          after_100m_subtext: ""
        },
        en: {
          product: "Product",
          team: "Team",
          join_us: "Join us",
          contact: "Contact",
          title: "Investment Choices.<br><em>Explained</em>",
          subtitle: "Bring your portfolio monitoring online and rethink your client experience.",
          revolution_100m: "The 100M revolution",
          before_100m: "BEFORE 100M",
          after_100m: "AFTER 100M",
          expertise_100m: "Our expertise",
          expertise_100m_subtext: "100M allows live monitoring of your positions, your performance and<br>to communicate to your client around them.",
          data_process: "Data process",
          data_process_subtext: "100M connects directly to your custodian data.",
          risk_performance: "Risk and performance attribution",
          risk_performance_subtext: "100M connects to your inhouse risk system and computes a performance attribution",
          user_experience: "User Experience",
          user_experience_subtext: "100M automatically generates a custom report, available on tablet, mobile, desktop and exportable in .pdf.",
          create_user_experience: "Create a differentiating user experience",
          portfolio_management: "Gestion",
          portfolio_management_subtext: "Follow your performance live.<br>Evidence your strategic choices and your alpha.",
          risks: "Risks",
          risks_subtext: "Guarantee data quality.<br>Improve operational limit monitoring.",
          sales: "Sales",
          sales_subtext: "Differentiate your offer.<br>Improve your client knowledge.",
          investor_relationship: "Investor Relationship",
          investor_relationship_subtext: "Create custom reports.<br>Decrease reporting costs.",
          know_more: "Would you like to know more?",
          ask_demo: "Ask for a demo",
          copyright: "Made with passion at 62 rue Jean-Jacques Rousseau, Paris, France.<br>&copy;2017, all rights reserved.",
          footer: "Special thanks to our family, our advisors, partners and early clients, especially to Hubert Lemoine, Maryelle Ouvrard, David Laup, Charles Miglietti, Sophie Despeisse, Nicolas Dusart, Guillaume Cendrier etc.",
          before_100m_subtext: "",
          after_100m_subtext: ""
        }
      }
    }
  },
  computed: {
    t() {
      return this.translation[this.lang] || {}
    },
  }
}
</script>
