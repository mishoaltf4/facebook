import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAVX_xEGj7AB4rj5wUfPxf6n9Zn_M05usk",
    authDomain: "first-project-8b229.firebaseapp.com",
    projectId: "first-project-8b229",
    storageBucket: "first-project-8b229.appspot.com",
    messagingSenderId: "811136614123",
    appId: "1:811136614123:web:9a3ca6504d6510332608ae",
    measurementId: "G-JV386GYXKF"
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
var auth = firebase.auth();

export{ firebase,firestore,auth }