import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLDi951vIW0tJrvCBbR08F-LOOlBfMv50",
  authDomain: "vernal-foundry-316200.firebaseapp.com",
  databaseURL: "https://vernal-foundry-316200-default-rtdb.firebaseio.com",
  projectId: "vernal-foundry-316200",
  storageBucket: "vernal-foundry-316200.appspot.com",
  messagingSenderId: "653454184519",
  appId: "1:653454184519:web:b04071cc85bda0e731e162",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
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
