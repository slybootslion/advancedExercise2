import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { create } from './utils/create'

// import formCreate from '@form-create/element-ui'
// Vue.use(formCreate)

Vue.prototype.$create = create

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
