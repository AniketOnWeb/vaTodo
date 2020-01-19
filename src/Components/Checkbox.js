import React from "react";
import app from "firebase/app";
import Tick from "../../assets/svg/tick.svg";
``;
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
      <span className="tasks__list-checkbox--inner">
        <img src={Tick} />
      </span>
    </div>
  );
};

export default Checkbox;
