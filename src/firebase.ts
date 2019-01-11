import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyB3whk1zrio5ZoPOTpsmFZdsQi4KMWBEoU',
    authDomain: 'life-counter-for-mtg-eric.firebaseapp.com',
    databaseURL: 'https://life-counter-for-mtg-eric.firebaseio.com',
    projectId: 'life-counter-for-mtg-eric',
    storageBucket: 'life-counter-for-mtg-eric.appspot.com',
    messagingSenderId: '1067930384904',
  };

firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true,
};
firestore.settings(settings);

export default firebase;
