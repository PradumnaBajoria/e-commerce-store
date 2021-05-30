import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDvGv63kVugNtrpKjNsSQoarPVc3nCfG3E",
    authDomain: "e-commerce-f52a7.firebaseapp.com",
    projectId: "e-commerce-f52a7",
    storageBucket: "e-commerce-f52a7.appspot.com",
    messagingSenderId: "920892882839",
    appId: "1:920892882839:web:028afe46524b0a4cb38ed2",
    measurementId: "G-VSBY2QKH3C"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt : 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase