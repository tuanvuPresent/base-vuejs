import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router/routers";
import VueCompositionApi from "@vue/composition-api";
import validation from './validation/vee-validate'
import VeeValidate from 'vee-validate';
import i18n from './locales'
Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(VeeValidate, validation);
new Vue({
    i18n,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
