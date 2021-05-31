import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAEJrJkv6FQFZYSgude7NeQJSXdGFsTU5o',
  authDomain: 'crown-db-5be8a.firebaseapp.com',
  projectId: 'crown-db-5be8a',
  storageBucket: 'crown-db-5be8a.appspot.com',
  messagingSenderId: '764839067946',
  appId: '1:764839067946:web:f0cae573ba10486eefde53',
  measurementId: 'G-DGV54R61P7'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
