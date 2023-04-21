import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyAJ3k--hnMvzkWJnsJPmMKdorvSJyvALhg",
  authDomain: "aws-loggin-teclab.firebaseapp.com",
  databaseURL: "https://aws-loggin-teclab-default-rtdb.firebaseio.com",
  projectId: "aws-loggin-teclab",
  storageBucket: "aws-loggin-teclab.appspot.com",
  messagingSenderId: "387406302787",
  appId: "1:387406302787:web:43af9e81a5e115eed38ef6",
  measurementId: "G-ZY05KYCT0L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
