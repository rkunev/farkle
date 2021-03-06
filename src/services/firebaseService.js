import firebase from 'firebase/app';
import auth from 'firebase/auth';
import database from 'firebase/database';
import { isOffline } from './offlineService';

var config = {
    apiKey: "AIzaSyByUNtfBfxAlj-sPTv2IBzDM5BOHvyXl6o",
    authDomain: "farkle-845de.firebaseapp.com",
    databaseURL: "https://farkle-845de.firebaseio.com",
    storageBucket: "farkle-845de.appspot.com",
    messagingSenderId: "978310062335"
};

if (!isOffline()) {
    firebase.initializeApp(config);
}

export { firebase };
