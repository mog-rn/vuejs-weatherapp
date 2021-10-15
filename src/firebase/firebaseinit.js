// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB1g-28QNRKtA3mnBWsatxLNE33Z0hn4js",

  authDomain: "weatherapp-21240.firebaseapp.com",

  projectId: "weatherapp-21240",

  storageBucket: "weatherapp-21240.appspot.com",

  messagingSenderId: "636896815309",

  appId: "1:636896815309:web:82c1d85674e3b864276184",

  measurementId: "G-EFG9K5CWET",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
//eslint-disable-next-line
const analytics = getAnalytics(firebaseApp);

export default firebaseApp.firestore();
