import { useContext } from "react";
import TaskContext from "../../store/TaskContext";
import { MoveCard } from "../styles/Card.styled";

const MoveTask = (props) => {
  const taskCtx = useContext(TaskContext);
  const moveToInProgressHandler = () => {
    taskCtx.moveTaskToInProgress(props.id);
  };
  const moveToQAHandler = () => {
    taskCtx.moveTaskToQA(props.id);
  };
  const moveToDoneHandler = () => {
    taskCtx.moveTaskToDone(props.id);
  };
  return (
    <MoveCard>
      <div>
        <h3>Move to</h3>
        <h2 onClick={props.onCloseMoveCard}>x</h2>
      </div>
      <button onClick={moveToInProgressHandler} type="button">
        In Progress
      </button>
      <button onClick={moveToQAHandler} type="button">
        QA
      </button>
      <button onClick={moveToDoneHandler} type="button">
        Done
      </button>
    </MoveCard>
  );
};

export default MoveTask;
