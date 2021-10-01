import { useContext } from "react";

import {
  Header,
  ItemsWrapper,
  MainContentWrapper,
} from "../../components/styles/MainContent/MainContent.styled";
import Task from "../../components/Tasks";
import TaskContext from "../../store/TaskContext";

const MainContent = (props) => {
  const taskCtx = useContext(TaskContext);
  const toDos = taskCtx.items.filter((item) => item.tag === "TODO");
  const inProgress = taskCtx.items.filter((item) => item.tag === "INPROGRESS");
  const QA = taskCtx.items.filter((item) => item.tag === "QA");
  const done = taskCtx.items.filter((item) => item.tag === "DONE");
  const todoTasks = toDos.map((item) => {
    return (
      <Task
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
      />
    );
  });
  const inProgressTasks = inProgress.map((item) => {
    return (
      <Task
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
      />
    );
  });
  const QATasks = QA.map((item) => {
    return (
      <Task
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
      />
    );
  });
  const doneTasks = done.map((item) => {
    return (
      <Task
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
      />
    );
  });
  return (
    <MainContentWrapper>
      <ItemsWrapper>
        <Header>To do {toDos.length > 0 && <span>{toDos.length}</span>}</Header>
        {todoTasks}
      </ItemsWrapper>
      <ItemsWrapper>
        <Header>
          In Progress
          {inProgress.length > 0 && <span>{inProgress.length}</span>}
        </Header>
        {inProgressTasks}
      </ItemsWrapper>
      <ItemsWrapper>
        <Header>Q&A {QA.length > 0 && <span>{QA.length}</span>}</Header>
        {QATasks}
      </ItemsWrapper>
      <ItemsWrapper>
        <Header>Done {done.length > 0 && <span>{done.length}</span>}</Header>
        {doneTasks}
      </ItemsWrapper>
    </MainContentWrapper>
  );
};

export default MainContent;
