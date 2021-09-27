import firebase from "firebase";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
let app = firebase.initializeApp(firebaseConfig)
export default app.database()
