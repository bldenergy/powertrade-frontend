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
    console.log('fcm_token', token)
    return token
  },
  onMessage: async () => {
    const messaging = getMessaging()
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload)
      // alert('Notificacion')
      // const { title, body } = payload.notification
      // const options = {
      //   body
      // }
      // ServiceWorkerRegistration.showNotification(title, options)
    })
  },
  init: async function () {
    try {
      if ((await this.tokenInlocalforage()) !== null) {
        console.log('it already exists')
        return false
      }
      console.log('it is creating it.')
      const messaging = getMessaging(app)
      await Notification.requestPermission()
      getToken(messaging, {
        vapidKey:
          'BDAmIWWe5I9LX_hFIs6YZKrXknH5OGGCi_MP3XtX_U7r3d5owmBYk6rXgBBylWlJFQy308RQdy9K7KxgHR44qhc'
      })
        .then((currentToken) => {
          console.log('current Token', currentToken)
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // save the token in your database
            localforage.setItem('fcm_token', currentToken)
            console.log('fcm_token', currentToken)
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
