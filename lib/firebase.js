// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcNnpJghWr5vggyclkMum-QmOGB-QRQNk",
  authDomain: "att-houses.firebaseapp.com",
  databaseURL: "https://att-houses.firebaseio.com",
  projectId: "att-houses",
  storageBucket: "att-houses.appspot.com",
  messagingSenderId: "457186909304",
  appId: "1:457186909304:web:7a15708368c1037858218d",
  measurementId: "G-TWMXKE3YTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)