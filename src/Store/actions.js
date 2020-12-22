export const addTodo = (id, task) => ({
  type: "ADD_TODO",
  payload: {
    id,
    task,
  },
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: {
    id,
  },
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: {
    id,
  },
});
