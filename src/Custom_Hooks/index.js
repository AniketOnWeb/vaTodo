import React, { useState, useEffect } from "react";
import app from "firebase/app";
import moment from "moment";
import { collatedTasksExist } from "../Helpers";

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unSubscribe = app
      .firestore()
      .collection("Tasks")
      .where("userId", "==", `${app.auth().currentUser.uid}`);

    unSubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unSubscribe = unSubscribe.where("ProjectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unSubscribe = unSubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unSubscribe = unSubscribe.where("date", "==", ""))
        : unSubscribe;

    unSubscribe = unSubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data()
      }));

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              task =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter(task => task.archived !== true)
      );

      setArchivedTasks(newTasks.filter(task => task.archived !== false));
    });

    return () => unSubscribe;
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    app
      .firestore()
      .collection("Projects")
      .where("userId", "==", `${app.auth().currentUser.uid}`)
      .orderBy("ProjectId")
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};
