// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
// import { doc, getFirestore, setDoc } from "firebase/firestore";
import localforage from 'localforage'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
// const db = getFirestore();

const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    const token = await localforage.getItem('fcm_token')
    return token
  },
  onMessage: async () => {
    const messaging = getMessaging()
    onMessage(messaging, (payload) => {
    })
  },
  init: async function () {
    try {
      if ((await this.tokenInlocalforage()) !== null) {
        return false
      }
      const messaging = getMessaging(app)
      await Notification.requestPermission()
      getToken(messaging, {
        vapidKey:
          
      })
        .then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // save the token in your database
            localforage.setItem('fcm_token', currentToken)
          } else {
            // Show permission request UI
            console.log(
              'NOTIFICACION, No registration token available. Request permission to generate one.'
            )
            // ...
          }
        })
        .catch((err) => {
          console.log('NOTIFICACIONAn error occurred while retrieving token . ')
          console.log(err)
        })
    } catch (error) {
      console.error(error)
    }
  }
}

export { firebaseCloudMessaging }
