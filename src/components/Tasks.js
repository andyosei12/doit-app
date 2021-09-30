import { TaskCard } from "./styles/Card.styled";
import { TaskBg, TaskContent, TaskHeader } from "./styles/Task.styled";

const Task = (props) => {
  return (
    <TaskCard>
      <TaskBg>
        <TaskHeader>
          <h3>{props.title}</h3>
          <h1>&mdash;</h1>
        </TaskHeader>
        <TaskContent>{props.description}</TaskContent>
      </TaskBg>
    </TaskCard>
  );
};

export default Task;
