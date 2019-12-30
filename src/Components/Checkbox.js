import React from "react";
import app from "firebase/app";

const Checkbox = ({ id }) => {
  const archiveTask = () => {
    app
      .firestore()
      .collection("Tasks")
      .doc(id)
      .update({
        archived: true
      });
  };

  return (
    <div
      className="tasks__list-checkbox"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox"></span>
    </div>
  );
};

export default Checkbox;
