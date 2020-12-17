const defaultTasks = [
  { id: "435", task: "Learn a framework", done: false },
  { id: "436", task: "Write some code", done: false },
];

const reducer = (state = defaultTasks, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          task: action.payload.task,
          done: false,
        },
      ];
      break;
    case "DELETE_TODO":
      return state.filter((task) => task.id !== action.payload.id);
      break;
    case "TOGGLE_TODO":
      return state.map((task) => {
        if (task.id === action.payload.id) task.done = !task.done;
        return task;
      });
      break;

    default:
      return state;
  }
};

export default reducer;
