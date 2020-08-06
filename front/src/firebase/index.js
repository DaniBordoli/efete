import firebase from "firebase/app";
import "firebase/storage";
import {
  FIREBASE_API_KEY,
  AUTHDOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from "@env";

var firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "efete-db5f7.firebaseapp.com",
  databaseURL: "https://efete-db5f7.firebaseio.com/",
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
