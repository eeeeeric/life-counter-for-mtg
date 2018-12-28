import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged_in: false,
    user: {
      displayName: '',
      email: '',
      photoURL: '',
      uid: '',
    },
  },
  mutations: {
    login: (state, user) => {
      state.logged_in = true;
      state.user = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      };
    },
    logout: (state) => {
      state.logged_in = false;
      state.user = {
        displayName: '',
        email: '',
        photoURL: '',
        uid: '',
      };
    },
  },
  actions: {

  },
});
