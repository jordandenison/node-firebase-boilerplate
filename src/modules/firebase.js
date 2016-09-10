import { EventEmitter } from 'events'
import firebase from 'firebase'
import path from 'path'

const FIREBASE_URL = process.env.FIREBASE_URL

if (!FIREBASE_URL) { throw new Error('FIREBASE_URL must be defined') }

const config = {
  databaseURL: FIREBASE_URL,
  serviceAccount: path.join(__dirname, '../config/firebase', `service-worker-creds.${process.env.NODE_ENV === 'production' ? 'prod' : 'dev'}.json`)
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()

const firebaseModule = new EventEmitter()

export default firebaseModule

ref.child('init').once('value', () => firebaseModule.emit('init'))
