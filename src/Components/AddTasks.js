import React, { useState } from "react";
import Plus from "../../assets/svg/plusGreen.svg";
import app from "firebase/app";
import { useSelectedProjectValue } from "../Contexts";
import moment from "moment";

export const AddTasks = () => {
  const [task, setTask] = useState("");
  const [show, setShow] = useState(false);
  const [project, setProject] = useState("");
  const { selectedProject } = useSelectedProjectValue();

  const addTask = () => {
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
          date: collatedDate,
          userId: `${app.auth().currentUser.uid}`
        })
        .then(() => {
          setTask("");
          setProject("");
        })
    );
  };

  return (
    <>
      <div className="add-task">
        <span>
          <img className="add-task-icon" src={Plus} alt="" />
        </span>
        <span className="add-task-title" onClick={() => setShow(!show)}>
          Add Task
        </span>
      </div>
      {show && (
        <>
          <input
            value={task}
            onChange={e => setTask(e.target.value)}
            type="text"
          />
          <button type="submit" onClick={addTask}>
            Submit
          </button>
        </>
      )}
    </>
  );
};
