import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDJUc1FdEk92ZMiWzKEqVv0wWmgh4BZcO0',
  authDomain: 'my-pomodoro-bb435.firebaseapp.com',
  projectId: 'my-pomodoro-bb435',
  storageBucket: 'my-pomodoro-bb435.appspot.com',
  messagingSenderId: '973484583825',
  appId: '1:973484583825:web:ea4996a6d88e5083e4c830',
  measurementId: 'G-K5PNR7L6YW',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, githubAuthProvider };
