import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocalMessages() {
  const locales = require.context("./locales", true, /[A-Za-z0-9-,\s]+.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-]+)./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

const i18n = new VueI18n({
  locale: localStorage.getItem("locale") || "en",
  fallbackLocale: "en",
  messages: loadLocalMessages(),
});

export default i18n;
