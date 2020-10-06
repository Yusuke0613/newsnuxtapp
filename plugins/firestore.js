import firebase from 'firebase/app';
import "firebase/firestore";

if (!firebase.apps.length) {
  var config = {
    apiKey: "AIzaSyD1rBldrq51xGXYvfIShh0VWEZZIFupSJg",
    authDomain: "nuxt-news-82a28.firebaseapp.com",
    databaseURL: "https://nuxt-news-82a28.firebaseio.com",
    projectId: "nuxt-news-82a28",
    storageBucket: "nuxt-news-82a28.appspot.com",
    messagingSenderId: "727265038664",
    appId: "1:727265038664:web:2802f036baba483824637d",
    //measurementId: "G-FHKYJDPSNV"
  };
  firebase.initializeApp(config);

}

const db = firebase.firestore();

export default db;
