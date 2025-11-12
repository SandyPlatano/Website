// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlxmhfBAzy1xTh7C4pM_2a348acqyhaUQ",
  authDomain: "website-3d08a.firebaseapp.com",
  projectId: "website-3d08a",
  storageBucket: "website-3d08a.firebasestorage.app",
  messagingSenderId: "516070031499",
  appId: "1:516070031499:web:5e2837bdcde9c4eecf548e",
  measurementId: "G-LHCCZGH9QQ"
};

// Initialize Firebase
let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Analytics only on client side
let analytics: Analytics | null = null;

if (typeof window !== "undefined") {
  // Check if analytics is supported before initializing
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };

