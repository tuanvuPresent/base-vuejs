import Vue from 'vue'
import VueI18n from 'vue-i18n'
import viMessage from './vi.json'
import enMessage from './en.json'


Vue.use(VueI18n)

const messages = {
  vi: viMessage,
  en: enMessage,
};

let i18n = new VueI18n({
  locale: 'vi', // set locale
  messages,
  fallbackLocale: 'vi',
});

export default i18n