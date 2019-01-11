import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import firebase from '@/firebase.ts';
import _ from 'lodash';

Vue.use(Vuex);

export interface Player {
  name: string;
  uid: string;
  life: number;
  // counters: {
  //   poison: number,
  //   energy: number,
  //   experience: number,
  // },
  // commander_damage: [
  //   // {
  //   //   opponent: '',
  //   //   amount: 0,
  //   // },
  // ],
}

export interface Room {
  [uid: string]: Player;
}

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    logged_in: false,
    user: {
      displayName: '',
      email: '',
      photoURL: '',
      uid: '',
    },
    active_room: '',
    room: {

    } as Room,
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
    setActiveRoom: (state, room: string) => {
      state.active_room = room;
      state.room = {
      };
    },
    onRoomUpdated: (state, querySnapshot: firebase.firestore.QuerySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const data = change.doc.data();
          console.log('New player: ', data);
          Vue.set(state.room, change.doc.id, {
            uid: change.doc.id,
            name: change.doc.id,
            life: data.life,
          } as Player);
        }
        if (change.type === 'modified') {
          const data = change.doc.data();
          console.log('Modified player: ', data);
          Vue.set(state.room, change.doc.id, {
            uid: change.doc.id,
            name: change.doc.id,
            life: data.life,
          } as Player);
        }
        if (change.type === 'removed') {
            console.log('Removed player: ', change.doc.data());
        }
      });
    },
  },
  actions: {

  },
});
