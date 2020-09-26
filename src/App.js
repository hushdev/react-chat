import React from 'react'
import './App.scss'

import { Chat } from './components/Chat'
import { Header } from './components/Header'
import { SignIn } from './components/SignIn'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyACZH4pfHj3yUHLdStsruXOPk4u_MJVuI4",
  authDomain: "react-chat-e26a1.firebaseapp.com",
  // authDomain: "192.168.1.39:3000",
  databaseURL: "https://react-chat-e26a1.firebaseio.com",
  projectId: "react-chat-e26a1",
  storageBucket: "react-chat-e26a1.appspot.com",
  messagingSenderId: "450504077203",
  appId: "1:450504077203:web:8119f72ff6dbd5b0a8c266"
})

const auth = firebase.auth()
const firestore = firebase.firestore()


export const App = () => {
  const [user] = useAuthState(auth)
  const provider = new firebase.auth.GoogleAuthProvider()

  if (!user) {
    return (
      <div className="chat">
        <SignIn provider={provider} auth={auth} />
      </div>
    )
  }

  if (user) {
    return (
      <div className="chat">
        <Header auth={auth} />
        <Chat auth={auth} firestore={firestore} firebase={firebase} />
      </div>
    )
  }
}

