import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyCgN6N3wo_eiJbRZCkCLG3e77v9it-yN9U',
  authDomain: 'portfolio-6b689.firebaseapp.com',
  projectId: 'portfolio-6b689',
  storageBucket: 'portfolio-6b689.appspot.com',
  messagingSenderId: '597352041148',
  appId: '1:597352041148:web:bda46a3897a5f2b9c55eb9',
  measurementId: 'G-QLY2ZR58SM',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
