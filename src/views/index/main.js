import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Sunflower from 'vue-sunflower'
import '@/styles/index.scss'
import '@/icons'
import Tinymce from '@/components/tinymce/index.vue'

Vue.component('tinymce', Tinymce)

Vue.config.productionTip = false

Vue.use(Sunflower)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
