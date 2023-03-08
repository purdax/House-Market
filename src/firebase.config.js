import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABp7XCO3ECrzc_5ZtSrgaxYoLXQtZ_lq0",
  authDomain: "house-marketplace-app-d6d2f.firebaseapp.com",
  projectId: "house-marketplace-app-d6d2f",
  storageBucket: "house-marketplace-app-d6d2f.appspot.com",
  messagingSenderId: "40548134245",
  appId: "1:40548134245:web:ec5c1e86ae2fe3c9f0c58c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()