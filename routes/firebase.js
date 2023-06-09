const { initializeApp } = require("firebase/app"); 
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
    apiKey: process.env.REACT_APP_STRIPE_SECRET,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  module.exports = db