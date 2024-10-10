import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAlHGHdCuD2auUeFGwn5otPSE-LNUoG4ko",
    authDomain: "cardshop-1b234.firebaseapp.com",
    projectId: "cardshop-1b234",
    storageBucket: "cardshop-1b234.appspot.com",
    messagingSenderId: "518734842828",
    appId: "1:518734842828:web:9fa803d2052525484f2b69",
    measurementId: "G-RSF15MNFP2"
  };

  const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { app, database };