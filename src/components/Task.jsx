import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../Store/actions";

function Task() {
  const allTasks = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="Tasks">
      {allTasks.map((task, taskIndex) => (
        <div
          className={`task ${task.done ? "done" : ""}`}
          onClick={() => dispatch(toggleTodo(task.id))}
          key={`task_${taskIndex}`}
        >
          <span>{task.task}</span>
          <img
            src="./delete.svg"
            alt="delete"
            onClick={() => dispatch(deleteTodo(task.id))}
          />
        </div>
      ))}
    </div>
  );
}

export default Task;
