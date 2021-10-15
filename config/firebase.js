import firebase from 'firebase/app'
import 'firebase/auth'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCkFD1eDdaB-xBolWgzcERpnMZ_kTzq6Ws',
  authDomain: 'social-app-81e09.firebaseapp.com',
  projectId: 'social-app-81e09',
  storageBucket: 'social-app-81e09.appspot.com',
  messagingSenderId: '174433289250',
  appId: '1:174433289250:web:f9f0b98de03238d2ba367b',
}
let Firebase

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig)
}

export default Firebase
