import firebase from '@react-native-firebase/auth'
import Constants from 'expo-constants'
import { initializeApp } from '@react-native-firebase/app'

// Initialize Firebase
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
}

let Firebase

if (firebase.apps === 0) {
  Firebase = initializeApp(firebaseConfig)
}

export default Firebase
