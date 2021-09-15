<template>
  <div id="app">
    <Header :dir="dir" @ChangeDir="handleDirections" />
    <router-view />
    <Footer :dir="dir" />
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
export default {
  data() {
    return {
      dir: false, // false as default value
    };
  },
  created() {
    this.CheckCurrentLang(localStorage.getItem("locale") || "en");
  },

  methods: {
    CheckCurrentLang(lang) {
      lang === "en" ? (this.dir = false) : (this.dir = true);
    },
    handleDirections(val) {
      this.dir = val;
    },
  },
  components: {
    Header,
    Footer,
  },
  name: "App",
};
</script>
