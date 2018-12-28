import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from './firebase';

import '@/../node_modules/firebaseui/dist/firebaseui.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('login', user);
      } else {
        this.$store.commit('logout');
      }
    });
  },
}).$mount('#app');
