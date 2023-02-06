import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { firebaseConfig } from '../firebase.config';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}