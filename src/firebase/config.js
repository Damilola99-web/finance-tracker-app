import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
	apiKey            : 'AIzaSyChWkxt1KkCa--zEqulKQbbR028N3J4goQ',
	authDomain        : 'finance-tracker03.firebaseapp.com',
	projectId         : 'finance-tracker03',
	storageBucket     : 'finance-tracker03.appspot.com',
	messagingSenderId : '165228342337',
	appId             : '1:165228342337:web:0bf51bf5f05c24fbc92ac0'
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init firestore & auth

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp 

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
