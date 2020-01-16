import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import moment from "moment";
import "firebase/analytics";
import "firebase/remote-config";

const config = {
  apiKey: "AIzaSyCKNvRcMlGG3qvEFlUkJuXpKbt1TnqG-zM",
  authDomain: "vatodo-83024.firebaseapp.com",
  databaseURL: "https://vatodo-83024.firebaseio.com",
  projectId: "vatodo-83024",
  storageBucket: "vatodo-83024.appspot.com",
  messagingSenderId: "189555943432",
  appId: "1:189555943432:web:a7680ea43962e78ad2c9bd",
  measurementId: "G-XS5SCHDSZ1"
};

class firebase {
  constructor() {
    app.initializeApp(config);
  }

  //Register new User

  async register(name, email, password) {
    await app.auth().createUserWithEmailAndPassword(email, password);

    let batch = app.firestore().batch();

    let proRef = app
      .firestore()
      .collection("Projects")
      .doc();

    batch.set(proRef, {
      ProjectColor: "magenta.e58fbd76.svg",
      ProjectId: "6x9y8z8z",
      archived: false,
      name: "WELCOME",
      userId: `${app.auth().currentUser.uid}`
    });

    let taskRef = app
      .firestore()
      .collection("Tasks")
      .doc();

    batch.set(taskRef, {
      ProjectId: "6x9y8z8z",
      archived: false,
      date: "",
      task: "You can add your Tasks here",
      userId: `${app.auth().currentUser.uid}`
    });

    return batch.commit();
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

  addQuote(quote) {
    if (!app.auth().currentUser) {
      return alert("Not Authorized");
    }

    return app
      .firestore()
      .doc(`Projects/${app.auth().currentUser.uid}`)
      .set({
        quote
      });
  }

  async getUserQuote() {
    const quote = await app
      .firestore()
      .doc(`Projects/${app.auth().currentUser.uid}`)
      .get();

    return quote.get("quote");
  }

  isInitialized() {
    return new Promise(resolve => {
      app.auth().onAuthStateChanged(resolve);
    });
  }

  addTask(project, selectedProject, task, setTask, setProject, taskDate) {
    const ProjectId = project || selectedProject;

    let collatedDate = "";

    if (ProjectId === "TODAY") {
      collatedDate = moment().format("DD/MM/YYYY");
    } else if (ProjectId === "NEXT__7") {
      collatedDate = moment()
        .add(7, "days")
        .format("DD/MM/YYYY");
    }

    return (
      task &&
      ProjectId &&
      app
        .firestore()
        .collection("Tasks")
        .add({
          archived: false,
          ProjectId,
          task,
          date: collatedDate || taskDate,
          userId: `${app.auth().currentUser.uid}`
        })
        .then(() => {
          setTask("");
          setProject("");
        })
    );
  }
}

export default new firebase();
