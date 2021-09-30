import { useReducer } from "react";
import TaskContext from "./TaskContext";

const initialValue = {
  items: [],
};
const taskReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      items: state.items.concat(action.item),
    };
  }
  return initialValue;
};
const TaskContextProvider = (props) => {
  const [taskState, dispatchTaskAction] = useReducer(taskReducer, initialValue);
  const addTaskHandler = (item) => {
    dispatchTaskAction({ type: "ADD", item: item });
  };
  const defaultValue = {
    items: taskState.items,
    addTask: addTaskHandler,
  };
  return (
    <TaskContext.Provider value={defaultValue}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
