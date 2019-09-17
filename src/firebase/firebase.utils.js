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

export const creatUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(`error creating user, error detail: ${error.message}`);
        }
    }
    return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;