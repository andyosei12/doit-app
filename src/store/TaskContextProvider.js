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
  if (action.type === "INPROGRESS") {
    const findTaskIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const task = state.items[findTaskIndex];
    const updateTask = { ...task, tag: "INPROGRESS" };
    const updatedTasks = [...state.items];
    updatedTasks[findTaskIndex] = updateTask;
    return {
      items: updatedTasks,
    };
  }
  if (action.type === "QA") {
    const findTaskIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const task = state.items[findTaskIndex];
    const updateTask = { ...task, tag: "QA" };
    const updatedTasks = [...state.items];
    updatedTasks[findTaskIndex] = updateTask;
    return {
      items: updatedTasks,
    };
  }
  if (action.type === "DONE") {
    const findTaskIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const task = state.items[findTaskIndex];
    const updateTask = { ...task, tag: "DONE" };
    const updatedTasks = [...state.items];
    updatedTasks[findTaskIndex] = updateTask;
    return {
      items: updatedTasks,
    };
  }
  return initialValue;
};
const TaskContextProvider = (props) => {
  const [taskState, dispatchTaskAction] = useReducer(taskReducer, initialValue);
  const addTaskHandler = (item) => {
    dispatchTaskAction({ type: "ADD", item: item });
  };
  const moveTaskToInProgressHandler = (id) => {
    dispatchTaskAction({ type: "INPROGRESS", id: id });
  };
  const moveTaskToQAHandler = (id) => {
    dispatchTaskAction({ type: "QA", id: id });
  };
  const moveTaskToDoneHandler = (id) => {
    dispatchTaskAction({ type: "DONE", id: id });
  };
  const defaultValue = {
    items: taskState.items,
    addTask: addTaskHandler,
    moveTaskToInProgress: moveTaskToInProgressHandler,
    moveTaskToQA: moveTaskToQAHandler,
    moveTaskToDone: moveTaskToDoneHandler,
  };
  return (
    <TaskContext.Provider value={defaultValue}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
