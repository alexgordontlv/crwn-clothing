import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD0rUtFPnkBKoNYERqTYr_9fvb1tNx0c-Q",
    authDomain: "crwn-db-464e0.firebaseapp.com",
    databaseURL: "https://crwn-db-464e0.firebaseio.com",
    projectId: "crwn-db-464e0",
    storageBucket: "crwn-db-464e0.appspot.com",
    messagingSenderId: "941758811039",
    appId: "1:941758811039:web:11c28f73c06d6545be4baa",
    measurementId: "G-9KYJ9SG6TX"
  };
  export const createUserProfileDocument = async(userAuth,additionalData)=> {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();


    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createDate = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createDate,
          ...additionalData
        })

      }catch(err){
        console.log('error for user', err.message)
      }


    }
    return userRef;
  }



  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;