import { useState } from "react";
// import TaskContext from "../store/TaskContext";
import { TaskCard } from "./styles/Card.styled";
import { TaskBg, TaskContent, TaskHeader } from "./styles/Task.styled";
import MoveTask from "./UI/MoveTask";

const Task = (props) => {
  const [showMoveCard, setShowMoveCard] = useState(false);
  const showMoveCardHandler = () => {
    setShowMoveCard((prevState) => !prevState);
  };
  const closeMoveCardHandler = () => {
    setShowMoveCard(false);
  };
  return (
    <TaskCard>
      <TaskBg>
        <TaskHeader>
          <h3>{props.title}</h3>
          <h1 onClick={showMoveCardHandler}>&mdash;</h1>
        </TaskHeader>
        <TaskContent>{props.description}</TaskContent>
      </TaskBg>
      {showMoveCard && (
        <MoveTask id={props.id} onCloseMoveCard={closeMoveCardHandler} />
      )}
    </TaskCard>
  );
};

export default Task;
