import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAzdY5wYWjKpCjaJGW0qjLb7EFz3gWdnoI",
    authDomain: "mymy-69ff4.firebaseapp.com",
    databaseURL: "https://mymy-69ff4.firebaseio.com",
    projectId: "mymy-69ff4",
    storageBucket: "mymy-69ff4.appspot.com",
    messagingSenderId: "333934452345",
    appId: "1:333934452345:web:f215bbf495a50c7ef33ea8",
    measurementId: "G-E40S7K1JLS"
};
let app = firebase.initializeApp(firebaseConfig)
export default app.database()
