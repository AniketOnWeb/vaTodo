import React, { useState } from "react";
import moment from "moment";

const TaskDate = ({ setTaskDate, taskDate, showTaskDate, setShowTaskDate }) => {
  return (
    <div className="task-date">
      <div className="task-date__list">
        <h2>Select Priority</h2>
        <li
          onClick={() => {
            setShowTaskDate(!showTaskDate);
            setTaskDate(moment().format("DD/MM/YYYY"));
          }}
        >
          Today
        </li>
        <li
          onClick={() => {
            setShowTaskDate(!showTaskDate);
            setTaskDate(
              moment()
                .add(1, "day")
                .format("DD/MM/YYYY")
            );
          }}
        >
          Tommorow
        </li>
        <li
          onClick={() => {
            setShowTaskDate(!showTaskDate);
            setTaskDate(
              moment()
                .add(7, "days")
                .format("DD/MM/YYYY")
            );
          }}
        >
          Next & Days
        </li>
      </div>
    </div>
  );
};

export default TaskDate;
