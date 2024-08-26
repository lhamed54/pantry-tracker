// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSfNtHvRw1QF7K5PXqlS1o45ZawlEl3Sk",
  authDomain: "pantry-tracker-5c00f.firebaseapp.com",
  projectId: "pantry-tracker-5c00f",
  storageBucket: "pantry-tracker-5c00f.appspot.com",
  messagingSenderId: "400334078217",
  appId: "1:400334078217:web:62ecbd27b1771be19a13d8",
  measurementId: "G-P52QDF104X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

// Only initialize Analytics in the browser
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
      console.log("Analytics initialized");
    } else {
      console.log("Analytics not supported");
    }
  });
}

// Export Firestore so it can be used in other parts of the app
export { firestore };
