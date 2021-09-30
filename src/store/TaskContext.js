import React from "react";

const TaskContext = React.createContext({
  items: [],
  addTask: (item) => {},
});

export default TaskContext;
