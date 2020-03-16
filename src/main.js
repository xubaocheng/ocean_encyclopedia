import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
if(process.env.NODE_ENV !== 'production') require('./mock')
import { searchModular, hotWord } from './components/index'
Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(searchModular)
Vue.use(hotWord)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
