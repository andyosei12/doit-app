import { useRef } from "react";
import { SecondaryButton } from "./styles/SecondaryButton.styled";
import { TaskFormStyled, TaskFormHeader } from "./styles/TaskForm.styled";
import PrimaryButton from "./UI/Buttons/PrimaryButton";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

const TaskForm = (props) => {
  const title = useRef();
  const description = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    props.onCloseModal();
  };
  return (
    <Modal onCloseModal={props.onCloseModal}>
      <TaskFormStyled onSubmit={submitFormHandler}>
        <TaskFormHeader>Add a task</TaskFormHeader>
        <Input ref={title} label="Title" input={{ type: "text" }} />
        <Input ref={description} label="Description" input={{ type: "text" }} />
        <PrimaryButton>Add Task</PrimaryButton>
        <SecondaryButton as="a" onClick={props.onCloseModal}>
          Cancel
        </SecondaryButton>
      </TaskFormStyled>
    </Modal>
  );
};

export default TaskForm;
