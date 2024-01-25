import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCLTN-VuffJMklQTe9eOk278TcBhnr12Vc",
  authDomain: "ecommerse-coderhouse.firebaseapp.com",
  projectId: "ecommerse-coderhouse",
  storageBucket: "ecommerse-coderhouse.appspot.com",
  messagingSenderId: "860475623730",
  appId: "1:860475623730:web:18d8e5d63b27574ce3ef2b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db