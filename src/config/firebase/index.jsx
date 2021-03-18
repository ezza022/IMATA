import firebase from "firebase/app";
import "firebase/database"
import "firebase/auth"
import "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV1bfPnLeWjKGX5dnMCEXypfAmOdKUDlg",
  authDomain: "imata-e7448.firebaseapp.com",
  projectId: "imata-e7448",
  storageBucket: "imata-e7448.appspot.com",
  messagingSenderId: "774445503522",
  appId: "1:774445503522:web:04127cdd783bfbb7d1267b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const storage = firebase.storage();

export default firebase;
