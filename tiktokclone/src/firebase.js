import { initializeApp } from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyAk4DcAtiZzO8sL4S_fWtZ5tGTS25uOAJo",
    authDomain: "tiktokclone-d39ab.firebaseapp.com",
    projectId: "tiktokclone-d39ab",
    storageBucket: "tiktokclone-d39ab.appspot.com",
    messagingSenderId: "799472699733",
    appId: "1:799472699733:web:48e926e5869cf4dfc087dc"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;