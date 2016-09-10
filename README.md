# Node Firebase Boilerplate

Firebase 3 reactive API based on Node 6.

## Before Getting Started

You should have your own Firebase account setup already.  If not then you can sign up for a free account over at the [Firebase Console](https://console.firebase.google.com/).

Once this is complete, create service worker credentials as described in the [Firebase Server SDK docs](https://firebase.google.com/docs/server/setup) (but make sure you have proper account access and are able to assign a role of editor/viewer etc when creating this service account) and place the files in `src/config/firebase`. (In the default/development environment this file should be named `service-worker-creds.dev.json`)

Also make sure to set your [environment variable](https://en.wikipedia.org/wiki/Environment_variable) FIREBASE_URL to the URL of your Firebase database. (For example in linux `export FIREBASE_URL=https://scorching-torch-8140.firebaseio.com/`)

### Getting Started

1.  Install Node.js v6.5.0 (preferably using [nvm](https://github.com/creationix/nvm))
2.  Clone the project repo `git clone git@github.com:jordandenison/node-firebase-boilerplate.git`
3.  Enter project directory: `cd node-firebase-boilerplate`
4.  Install dependencies and build the app: `npm install`
5.  Run tests: `npm test`
6.  Lint: `npm run lint`
7.  Start the app: `npm start`
8.  Rebuild and start the app: `npm run restart`
