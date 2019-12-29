import React, { useState, useEffect } from "react";
import app from "firebase/app";
import moment from "moment";
import { collatedTasksExist } from "../Helpers";

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unSelect = app
      .firestore()
      .collection("Tasks")
      .where("userId", "==", app.auth().currentUser.uid);

    unSelect =
      selectedProject && collatedTasksExist(selectedProject)
        ? (unSelect = unSelect.where("ProjectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unSelect = unSelect.where(
            "date",
            "==",
            moment().format("DD" / "MM" / "YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unSelect = unSelect.where("date", "==", ""))
        : unSelect;

    unSelect = unSelect.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data()
      }));

      setTasks(
        selectedProject === "NEXT__7"
          ? newTasks.filter(
              task =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived != true
            )
          : newTasks.filter(task => task.archived !== true)
      );

      setArchivedTasks(newTasks.filter(task => task.archived !== false));
    });
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
