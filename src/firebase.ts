import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyB3whk1zrio5ZoPOTpsmFZdsQi4KMWBEoU',
    authDomain: 'life-counter-for-mtg-eric.firebaseapp.com',
    databaseURL: 'https://life-counter-for-mtg-eric.firebaseio.com',
    projectId: 'life-counter-for-mtg-eric',
    storageBucket: 'life-counter-for-mtg-eric.appspot.com',
    messagingSenderId: '1067930384904',
  };

firebase.initializeApp(config);

export default firebase;
