/* eslint-disable no-console */
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDJUc1FdEk92ZMiWzKEqVv0wWmgh4BZcO0',
  authDomain: 'my-pomodoro-bb435.firebaseapp.com',
  projectId: 'my-pomodoro-bb435',
  storageBucket: 'my-pomodoro-bb435.appspot.com',
  messagingSenderId: '973484583825',
  appId: '1:973484583825:web:ea4996a6d88e5083e4c830',
  measurementId: 'G-K5PNR7L6YW',
};
import { toast } from 'react-toastify';

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Autenticacão/Cadastro com Google
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
  } catch (error) {
    console.log(error);
  }
};

// Fazer login

const signInEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    toast.error('Problemas ao fazer o login. Tente novamente 👀!');
  }
};

// Cadastro no app com email e senha
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection('users').add({
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
    toast.success(`Parabéns ${name}, você criou sua conta!!! 🎇😍`);
  } catch (error) {
    toast.erro('Erro com a autenticação Google 😓');
    console.log(error);
  }
};

// Pedindo link para criar nova senha
const sendPasswordResetEmail = async (email) => {
  try {
    toast.info('Link enviado para seu email 📧💻');
    await auth.sendPasswordResetEmail(email);
  } catch (error) {
    toast.error('Email incorreto ou não está cadastrado em nosso sistema ⚠️😓');
    console.log(error);
  }
};

// Desconectando
const handleOutClick = (event) => {
  event.preventDefault();
  toast.info('Você se desconectou 🤙📴');
  auth.signOut();
};

export {
  auth,
  db,
  signInWithGoogle,
  registerWithEmailAndPassword,
  handleOutClick,
  signInEmailAndPassword,
  sendPasswordResetEmail,
};
