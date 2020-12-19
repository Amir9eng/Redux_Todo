import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Store/actions";
import { generateId } from "../utils";

export default function Form() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = e.target.task.value.trim();
    if (!task) return null;
    const id = generateId();
    dispatch(addTodo(id, task));
    e.target.reset();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <span>Add a new Task:</span>
      <input type="text" name="task" placeholder="Input Task and hit Enter" />
    </form>
  );
}
