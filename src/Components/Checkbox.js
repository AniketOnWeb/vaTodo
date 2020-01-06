import React from "react";
import app from "firebase/app";
import Tick from "../../assets/svg/tick.svg";

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
        <span className="tasks__list-checkbox--inner-2">
          <img
            style={{ width: "1rem", marginBottom: "7px", marginLeft: "1px" }}
            src={Tick}
          />
        </span>
      </span>
    </div>
  );
};

export default Checkbox;
