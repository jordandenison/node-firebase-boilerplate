import firebase, { ref } from './firebase'

const init = () => {
  console.log('sample module init 1')
  ref.child('init').once('value')
    .then(() => console.log('sample module init 2'))
}

firebase.once('init', init)
