import React from "react";

const TaskContext = React.createContext({
  items: [],
  addTask: (item) => {},
  moveTaskToInProgress: (id) => {},
  moveTaskToQA: (id) => {},
  moveTaskToDone: (id) => {},
});

export default TaskContext;
