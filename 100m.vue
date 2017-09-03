<style>
@import './css/raw.css';

[grid] { flex-direction: row;flex-wrap: wrap;margin: -5px; }
[grid]>* { flex: 1 0 calc(100% - 10px);margin: 5px; }
@media (min-width: 600px) {
  [grid]>[t2] { flex: 1 0 calc(50% - 10px); }
  [grid]>[t3] { flex: 1 0 calc(33.33% - 10px); }
}

section, header, footer { position: relative;margin: auto!important;max-width: 80%; }
header, footer { padding: 15px 0; }
section { min-height: 75vh;padding: 50px 0; }
header::before,
section:nth-child(even)::before {
  content: " ";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw;
  right: calc((100% - 100vw) / 2);
  z-index: -1;
  background: #F5FCFF;
}

@import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,900');
html { font-family: Lato; }
body { font-size: 1.4rem; }
h1 { font-size: 2em;line-height: 1.33;margin: 30px 0; }
em { font-style: normal;color: var(--primary); }
a { cursor: pointer;margin: 0 6px;padding: 5px 12px;transition: var(--transition);border-radius: 4px; }
.button { background-color: rgba(36, 187, 249, 0.1); }
a:hover, .button:hover { background-color: rgba(36, 187, 249, 0.2); }
a::before { content: none; }
ul { padding: 0;list-style: none; }
header ul { margin-left: auto; }
[grid] > h1, [grid] > h2, [grid] > span { flex: 1 0 100%;text-align: center; }
.home h1, .home h2 { text-align: left; }
.home h2 { font-weight: 300; }
.logo { margin: 0;padding: 0;background: none!important;min-height: 20px; }
.lang { padding: 0;width: 20px;height: 100%;background: none!important;}
.img-home, .img-desktop-mobile { position: absolute; }
.img-home { bottom: 0;right: -10%;width: 200px; }
.img-desktop-mobile { bottom: 0;left: 10%;width: 80%;}
.expertise { padding-bottom: calc(35vw); }
.ux img, footer img { width: 50px; }
.want-more, footer { min-height: 250px!important; }
.want-more h2 { margin-bottom: 20px; }
.want-more .button { color: var(--primary);background: white;font-weight: 500;text-transform: uppercase; }
.want-more .button:hover { background: rgba(36, 187, 249, 0.2); }
footer { font-size: 80%;text-align: center; }
footer a { padding: 0;background: none!important; }

header ul li:nth-child(-n+4) { display: none; }
@media (min-width: 1000px){
  header ul li:nth-child(-n+4) { display: inherit; }
  section, header, footer { max-width: 900px; }
  body { font-size: 1.6rem; }
  h1 { font-size: 3em; }
  .img-home { width: 400px; }
  .expertise { padding-bottom: 400px; }
}
</style>

<template>
<main>
  <header row>
    <a row center href="/" class="logo"><img alt="100M" src="/img/100M-logo.svg" /></a>
    <ul row>
      <li><a onclick="drift.api.openChat()" v-text="t.product"></a></li>
      <li><a onclick="drift.api.openChat()" v-text="t.team"></a></li>
      <li><a onclick="drift.api.openChat()" v-text="t.join_us"></a></li>
      <li><a onclick="drift.api.openChat()" class="button" v-text="t.contact"></a></li>
      <li v-if="lang==='fr'"><a row center class="lang en" @click="lang='en'"><img alt="EN" src="/img/flag-en.svg" /></a></li>
      <li v-if="lang==='en'"><a row center class="lang fr" @click="lang='fr'"><img alt="FR" src="/img/flag-fr.svg" /></a></li>
    </ul>
  </header>

  <section class="home">
    <h1 v-html="t.title"></h1>
    <h2 v-html="t.subtitle"></h2>
    <img class="img-home" src="/img/home.svg" />
  </section>

  <section class="revolution" grid>
    <h2 v-html="t.revolution_100m"></h2>
    <div t2>
      <h3 v-html="t.before_100m"></h3>
      <span v-html="t.before_100m_subtext"></span>
      <img src="/img/step1_img1.png" />
    </div>
    <div t2>
      <h3 v-html="t.after_100m"></h3>
      <span v-html="t.after_100m_subtext"></span>
      <img src="/img/step1_img2.png" />
    </div>
  </section>

  <section class="expertise" grid>
    <h2 v-html="t.expertise_100m"></h2>
    <span v-html="t.expertise_100m_subtext"></span>
    <div t3>
      <img src="/img/step2_icon1.png" />
      <h3 v-html="t.data_process"></h3>
      <span v-html="t.data_process_subtext"></span>
    </div>
    <div t3>
      <img src="/img/step2_icon2.png" />
      <h3 v-html="t.risk_performance"></h3>
      <span v-html="t.risk_performance_subtext"></span>
    </div>
    <div t3>
      <img src="/img/step2_icon3.png" />
      <h3 v-html="t.user_experience"></h3>
      <span v-html="t.user_experience_subtext"></span>
    </div>
    <img class="img-desktop-mobile" src="/img/desktop-mobile.png" />
  </section>

  <section class="ux" grid>
    <h2 v-html="t.create_user_experience"></h2>
    <div t2>
      <img src="/img/icon-gestion.png" />
      <h3 v-html="t.portfolio_management"></h3>
      <span v-html="t.portfolio_management_subtext"></span>
    </div>
    <div t2>
      <img src="/img/icon-risque.png" />
      <h3 v-html="t.risks"></h3>
      <span v-html="t.risks_subtext"></span>
    </div>
    <div t2>
      <img src="/img/icon-commercial.png" />
      <h3 v-html="t.sales"></h3>
      <span v-html="t.sales_subtext"></span>
    </div>
    <div t2>
      <img src="/img/icon-service-client.png" />
      <h3 v-html="t.investor_relationship"></h3>
      <span v-html="t.investor_relationship_subtext"></span>
    </div>
  </section>

  <section class="want-more" column center>
    <h2 v-html="t.know_more"></h2>
    <a class="button" onclick="drift.api.openChat()" v-text="t.ask_demo"></a>
  </section>

  <footer column center>
    <h2 v-text="t.follow"></h2>
    <ul row class="social-media">
      <li><a target="_blank" href=""><img src="/img/icon-twitter.png" /></a></li>
      <li><a target="_blank" href=""><img src="/img/icon-facebook.png" /></a></li>
      <li><a target="_blank" href="https://www.linkedin.com/company-beta/11049391/"><img src="/img/icon-linkedin.png" /></a></li>
    </ul>
    <div class="copyright" v-html="t.copyright"></div>
    <div class="footer" v-html="t.footer"></div>
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
          title: "Digitalisez le suivi de portefeuille.<br>Transformez <em>l'expérience client.</em>",
          subtitle: "Offrez à votre client un outil de reporting entièrement digitalisé.",
          revolution_100m: "La Révolution 100M",
          before_100m: "Avant 100M",
          before_100m_subtext: "",
          after_100m: "Après 100M",
          after_100m_subtext: "",
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
          follow: "Suivez-nous",
          copyright: "100M, 62 rue Jean-Jacques Rousseau, Paris, France.<br>&copy;2017, tous droits réservés.",
          footer: "Remerciement spéciale à nos familles, nos conseillers, partenaires et premiers clients, remerciement particulier à <br>Hubert Lemoine, Maryelle Ouvrard, David Laup, Charles Miglietti, Sophie Despeisse, Nicolas Dusart, Guillaume Cendrier.",
        },
        en: {
          product: "Product",
          team: "Team",
          join_us: "Join us",
          contact: "Contact",
          title: "Investment Choices.<br><em>Explained.</em>",
          subtitle: "Bring your portfolio monitoring online and rethink your client experience.",
          revolution_100m: "The 100M revolution",
          before_100m: "Before 100M",
          before_100m_subtext: "",
          after_100m: "After 100M",
          after_100m_subtext: "",
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
          follow: "Follow us",
          copyright: "Made with passion at 62 rue Jean-Jacques Rousseau, Paris, France.<br>&copy;2017, all rights reserved.",
          footer: "Special thanks to our family, our advisors, partners and early clients, especially to Hubert Lemoine, Maryelle Ouvrard, David Laup, Charles Miglietti, Sophie Despeisse, Nicolas Dusart, Guillaume Cendrier etc.",
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
