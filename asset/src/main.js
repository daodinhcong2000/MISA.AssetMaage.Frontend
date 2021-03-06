import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as jqueryExports from "jquery";
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

Vue.use(FlashMessage, {});

window.$ = jqueryExports.default;

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
