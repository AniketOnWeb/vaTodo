import React, { useState } from "react";
import app from "firebase/app";
import { generatePushId } from "../Helpers";
import { useProjectsValue } from "../Contexts";

export const AddProjects = ({ shouldShow = false }) => {
  const [ProjectName, setProjectName] = useState("");
  const [show, setShow] = useState(shouldShow);

  //will generate random Project Id
  const ProjectId = generatePushId();

  //coming from custom hooks and context
  const { projects, setProjects } = useProjectsValue();

  const addProject = () => {
    ProjectName &&
      app
        .firestore()
        .collection("Projects")
        .doc(`${app.auth().currentUser.uid}`)
        .set({
          ProjectId,
          name: ProjectName,
          userId: app.auth().currentUser.uid
        })
        .then(() => {
          setProjects([...projects]);
          setProjectName("");
          setShow(false);
        });
  };

  return <div className="add-project">hi</div>;
};

export default AddProjects;
