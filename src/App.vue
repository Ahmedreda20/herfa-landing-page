<template>
  <div id="app">
    <Header :header="header" />
    <router-view />
    <Footer :footer="footer" />
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
export default {
  data() {
    return {
      header: {},
      footer: {},
    };
  },
  created() {
    this.CheckCurrentLang(localStorage.getItem("locale"));
  },

  methods: {
    CheckCurrentLang(lang) {
      const self = this;
      if (lang) {
        if (lang === "ar") {
          this.$router.push("/ar");

          self.header = {
            pages: ["الرئيسية", "اتصل بنا", "كيف تستخدم"],
            rtl: true,
            button: "افتح منفذ",
            locale: "Ar",
          };
          self.footer = {
            pages: ["عن", "التعليمات", "الاحكام والشروط"],
            rtl: true,
            right: "افتح منفجميع الحقوق محفوظة حرفة",
            locale: "Ar",
          };
        } else {
          this.$router.push("/");
          self.header = {
            pages: ["Home", "Contact us", "How to use"],
            rtl: false,
            button: "Open portal",
            locale: "En",
          };
          self.footer = {
            pages: ["About", "FAQ", "Terms and Conditions"],
            rtl: false,
            right: "All right reserved to handmade",
            locale: "En",
          };
        }
      } else {
        localStorage.setItem("locale", "en");
        window.location.reload();
      }
    },
  },
  components: {
    Header,
    Footer,
  },
  name: "App",
};
</script>
