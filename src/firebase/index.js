import firebase from 'firebase/app';
// import firebase from 'firebase/compat/app';
// import * as firebase from 'firebase/app'

import 'firebase/firestore'; // for the db
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBUNuaLPb0zSkNL3zaG2u_02x54k1fAFKw",
  authDomain: "shopping-website-fdf0e.firebaseapp.com",
  projectId: "shopping-website-fdf0e",
  storageBucket: "shopping-website-fdf0e.appspot.com",
  messagingSenderId: "988377260445",
  appId: "1:988377260445:web:075712c2c1518868204f74"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) { return };

  const userRef = firestore.doc(`users/${userAuth.uid}`) //users/uniq26535
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export {
  firestore,
  createUserProfileDocument,
  auth,
}