import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css';
import './assets/js/mock.js';
import Axios from 'axios';
import router from  './router/index.js';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import { Calendar,Cell,CellGroup,Button ,Lazyload,Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Calendar).use(Cell).use(CellGroup).use(Button);
Vue.config.productionTip = false
Vue.prototype.$http  = Axios 

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
