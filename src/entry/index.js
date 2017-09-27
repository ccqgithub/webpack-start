import '../lib/polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Admin from '../vc/Index';
import store from '../vuex/store';

require('../less/admin.less');

Vue.use(VueRouter);

const Com = Vue.extend(Admin);

new Com({
  store
}).$mount('#app');
