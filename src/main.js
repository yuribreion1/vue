import Vue from 'vue'
import App from './App.vue'
require('./css/uikit.min.css');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
