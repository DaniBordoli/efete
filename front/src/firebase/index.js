import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBWzvdmhVkJF1Y0muHpJJeKUKaFNZn9_HQ",
  authDomain: "efete-db5f7.firebaseapp.com",
  databaseURL: "https://efete-db5f7.firebaseio.com",
  projectId: "efete-db5f7",
  storageBucket: "efete-db5f7.appspot.com",
  messagingSenderId: "501735424301",
  appId: "1:501735424301:web:73d421995f614c45a4d3a4",
  measurementId: "G-BES4DSQ591",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
