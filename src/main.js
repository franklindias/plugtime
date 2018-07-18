// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//CSS IMPORTS
import 'bootstrap/dist/css/bootstrap.css';
import 'ionicons/dist/css/ionicons.css';
import 'font-awesome/css/font-awesome.min.css';
import '../static/css/all-skins.css';
import '../static/css/adminLTE.css';

//JS IMPORTS
import 'bootstrap/dist/js/bootstrap.js'
import '../static/js/adminLTE.js';

import Vue from 'vue'
import App from './App'
import router from './router'
import VueBreadcrumbs from 'vue-breadcrumbs';

Vue.config.productionTip = false

Vue.use(VueBreadcrumbs, {
  template: '<ol class="breadcrumb">' +
            '<li v-for="(crumb, key) in $breadcrumbs">' +
            '<router-link :to="linkProp(crumb)" :key="key"> {{ crumb | crumbText }} </router-link>' +
            '</li></ol>'
});

export const globalBus = new Vue();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
