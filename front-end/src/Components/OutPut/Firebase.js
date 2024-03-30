import  firebase  from 'firebase/compat/app';
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAELQqdnplzZvFiTB9fuR1QcR4irT1Qdo",
  authDomain: "dentalproject-cf013.firebaseapp.com",
  databaseURL: "https://dentalproject-cf013-default-rtdb.firebaseio.com",
  projectId: "dentalproject-cf013",
  storageBucket: "dentalproject-cf013.appspot.com",
  messagingSenderId: "294932453729",
  appId: "1:294932453729:web:3d8babad0b06137b584d20",
  measurementId: "G-F0BQ8E9TPR"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
