// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
export * from 'firebase/auth';
export * from 'firebase/firestore';

let firebaseApp = null;
let firebaseAnalytics = null;

export function getFirebaseApp() {
  return firebaseApp;
}

export function setupFirebase() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyBeKuYHyxWR9tSpkUcoNuO0lqsH5nCqjHE',
    authDomain: 'portfolio-797bb.firebaseapp.com',
    projectId: 'portfolio-797bb',
    storageBucket: 'portfolio-797bb.appspot.com',
    messagingSenderId: '964036693282',
    appId: '1:964036693282:web:739df33c43020861ab697b',
    measurementId: 'G-EDD96N0SJN',
  };

  // Initialize Firebase
  firebaseApp = initializeApp(firebaseConfig);
  firebaseAnalytics = getAnalytics(firebaseApp);
}
