import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyCKNvRcMlGG3qvEFlUkJuXpKbt1TnqG-zM",
  authDomain: "vatodo-83024.firebaseapp.com",
  databaseURL: "https://vatodo-83024.firebaseio.com",
  projectId: "vatodo-83024",
  storageBucket: "vatodo-83024.appspot.com",
  messagingSenderId: "189555943432",
  appId: "1:189555943432:web:a7680ea43962e78ad2c9bd"
};

class firebase {
  constructor() {
    app.initializeApp(config);
  }

  //Register new User

  async register(name, email, password) {
    await app.auth().createUserWithEmailAndPassword(email, password);
    return app.auth().currentUser.updateProfile({
      displayName: name
    });
  }

  //Login Existing User
  login(email, password) {
    return app.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {
    return app.auth().signOut();
  }

  getCurrentUser() {
    return app.auth().currentUser;
  }

  getCurrentUsername() {
    return app.auth().currentUser && app.auth().currentUser.displayName;
  }

  isInitialized() {
    return new Promise(resolve => {
      app.auth().onAuthStateChanged(resolve);
    });
  }
}

export default new firebase();
