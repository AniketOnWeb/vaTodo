import React, { useState, useEffect } from "react";
import app from "firebase/app";

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
