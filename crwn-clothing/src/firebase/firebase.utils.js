import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBRBietMd3a5Hkn6tBnnzNm211Qq_XLdnE",
    authDomain: "crown-db-a0579.firebaseapp.com",
    databaseURL: "https://crown-db-a0579.firebaseio.com",
    projectId: "crown-db-a0579",
    storageBucket: "crown-db-a0579.appspot.com",
    messagingSenderId: "339270607394",
    appId: "1:339270607394:web:2a34a41f947060426ea07b",
    measurementId: "G-4ZJ37VSVL0"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (e) {
            console.log('Error creating user', e.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/*
filestore.collection('users')               // all users
    .doc('vzqzdoA8vasdidNbwfvQ')            // get specific user
        .collection('cartItems')            // get all cart item for specific user
            .doc('sCvxgY2khc3qRUMHU1wI')    // get specific cart item for specific user

filestore.collection('/users/vzqzdoA8vasdidNbwfvQ/cartItems')                    // get all cart item for specific user
filestore.doc('/users/vzqzdoA8vasdidNbwfvQ/cartItems/sCvxgY2khc3qRUMHU1wI')      // get specific cart item for specific user
*/

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;