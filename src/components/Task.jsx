import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Task() {
  const allTasks = useSelector((state) => state);
  const dispatch = useDispatch();
  return <div className="Tasks">{allTasks}</div>;
}

export default Task;
