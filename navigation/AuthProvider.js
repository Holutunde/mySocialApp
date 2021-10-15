import React, { createContext, useState } from 'react'
//import auth from '@react-native-firebase/auth'
import Firebase from '../config/firebase'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const auth = Firebase.auth()

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password)
          } catch (e) {
            console.log(e)
          }
        },

        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password)
          } catch (e) {
            console.log(e)
          }
        },
        logout: async () => {
          try {
            await auth().signOut
          } catch (e) {
            console.log(e)
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
