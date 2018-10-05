import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "pt",
  messages: {
    pt: require("@/assets/i18n/pt"),
    en: require("@/assets/i18n/en"),
    fr: require("@/assets/i18n/es")
  }
});

export default i18n;
