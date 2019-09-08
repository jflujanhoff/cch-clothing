import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB496vs2XU8cbAQ-IBwIO2nbIzl6sixgRE",
    authDomain: "cch-clothing.firebaseapp.com",
    databaseURL: "https://cch-clothing.firebaseio.com",
    projectId: "cch-clothing",
    storageBucket: "",
    messagingSenderId: "540140130735",
    appId: "1:540140130735:web:a11319aae4153dcd"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;