/* eslint-disable no-console */
import firebase from 'firebase';
import { toast } from 'react-toastify';
import { useHistoy } from 'react-router-dom';

const firebaseConfig = {
  apiKey: 'AIzaSyDJUc1FdEk92ZMiWzKEqVv0wWmgh4BZcO0',
  authDomain: 'my-pomodoro-bb435.firebaseapp.com',
  projectId: 'my-pomodoro-bb435',
  storageBucket: 'my-pomodoro-bb435.appspot.com',
  messagingSenderId: '973484583825',
  appId: '1:973484583825:web:ea4996a6d88e5083e4c830',
  measurementId: 'G-K5PNR7L6YW',
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async (event) => {
  event.preventDefault();
  try {
    const res = await auth.signInWithPopup(googleProvider);

    const user = res.user;

    const query = await db
      .collection('users')
      .where('uid', '==', user.uid)
      .get();

    if (query.docs.length === 0) {
      await db.collection('users').add({
        uid: user.uid,
        name: user.displayName,
        autProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    toast.success('Bem-vindo(a) 💓⏰');
  } catch (err) {
    console.log(err);
    toast.error('Algo está icorreto...👀');
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(
      name,
      email,
      password,
    );
    const user = res.user;
    await db.collection('users').add({
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
    toast.success('Parabéns, você foi registrado(a) com sucesso!!! 🎇😍');
  } catch (err) {
    console.log(err);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail;
    toast.info('Link enviado para seu email 📧💻');
  } catch (err) {
    toast.error('Email incorreto ou não está cadastrado em nosso sistema ⚠️😓');
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
