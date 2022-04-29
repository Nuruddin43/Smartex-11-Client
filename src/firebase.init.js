// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCfK1-uu_D1J7P-9AJmUVY4jZWLiYpnJA",
  authDomain: "smartex-warehouse.firebaseapp.com",
  projectId: "smartex-warehouse",
  storageBucket: "smartex-warehouse.appspot.com",
  messagingSenderId: "932960773416",
  appId: "1:932960773416:web:2f0ee634a58b63aebadc1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
