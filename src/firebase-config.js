const Rebase = require("re-base");
const firebase = require("firebase");

const FirebaseConfig = {
  apiKey: "AIzaSyDs9wBhVMoDH88oIp_mGUjBy8hRDCZ0LCM",
  authDomain: "react-company-portfolio-a2eeb.firebaseapp.com",
  databaseURL: "https://react-company-portfolio-a2eeb.firebaseio.com",
  projectId: "react-company-portfolio-a2eeb",
  storageBucket: "react-company-portfolio-a2eeb.appspot.com",
  messagingSenderId: "366586092209"
};

const app = firebase.initializeApp(FirebaseConfig);
const config = Rebase.createClass(app.database())

export default config;
