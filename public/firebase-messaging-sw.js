importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js')

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
})

class CustomPushEvent extends Event {
  constructor(data) {
    super('push')

    Object.assign(this, data)
    this.custom = true
  }
}

/*
 * Overrides push notification data, to avoid having 'notification' key and firebase blocking
 * the message handler from being called
 */
self.addEventListener('push', (e) => {
  // Skip if event is our own custom event
  if (e.custom) return

  // Kep old event data to override
  const oldData = e.data

  // Create a new event to dispatch, pull values from notification key and put it in data key,
  // and then remove notification key
  const newEvent = new CustomPushEvent({
    data: {
      ehheh: oldData.json(),
      json() {
        const newData = oldData.json()
        newData.data = {
          ...newData.data,
          ...newData.notification
        }
        delete newData.notification
        return newData
      }
    },
    waitUntil: e.waitUntil.bind(e)
  })

  // Stop event propagation
  e.stopImmediatePropagation()

  // Dispatch the new wrapped event
  dispatchEvent(newEvent)
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  ) // debug info

  const { title, body, icon, ...restPayload } = payload.data

  const notificationOptions = {
    body,
    icon: icon || '/icon-384x384.png', // path to "fallback" BLD notification logo
    data: restPayload
  }

  return self.registration.showNotification(title, notificationOptions)
})

self.addEventListener('notificationclick', (event) => {
  // console.log('[firebase-messaging-sw.js] notificationclick ', event); // debug info

  if (event.notification.data && event.notification.data.click_action) {
    self.clients.openWindow(event.notification.data.click_action)
  } else {
    self.clients.openWindow(event.currentTarget.origin)
  }

  // close notification after click
  event.notification.close()
})
