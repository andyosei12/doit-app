import { TaskCard } from "./styles/Card.styled";
import { TaskBg, TaskContent, TaskHeader } from "./styles/Task.styled";

const Task = (props) => {
  return (
    <TaskCard>
      <TaskBg>
        <TaskHeader>
          <h3>Design and Development with the sales</h3>
          <h1>&mdash;</h1>
        </TaskHeader>
        <TaskContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </TaskContent>
      </TaskBg>
    </TaskCard>
  );
};

export default Task;
