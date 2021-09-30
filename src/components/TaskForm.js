import { useRef, useContext, useState } from "react";
import TaskContext from "../store/TaskContext";
import { FormValidationStyled } from "./styles/FormValidation.styled";
import { SecondaryButton } from "./styles/SecondaryButton.styled";
import { TaskFormStyled, TaskFormHeader } from "./styles/TaskForm.styled";
import PrimaryButton from "./UI/Buttons/PrimaryButton";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

const TaskForm = (props) => {
  const taskCtx = useContext(TaskContext);
  const [isFormValid, setIsFormValid] = useState(true);
  const titleRef = useRef();
  const descriptionRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(descriptionRef.current.value.trim().length);
    if (titleRef.current.value.trim().length === 0) {
      setIsFormValid(false);
      return;
    }
    if (descriptionRef.current.value.trim().length === 0) {
      setIsFormValid(false);
      return;
    }

    taskCtx.addTask({
      id: Math.random(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      tag: "TODO",
    });
    props.onCloseModal();
  };
  return (
    <Modal onCloseModal={props.onCloseModal}>
      <TaskFormStyled onSubmit={submitFormHandler}>
        <TaskFormHeader>Add a task</TaskFormHeader>
        {!isFormValid && (
          <FormValidationStyled>All fields are required</FormValidationStyled>
        )}
        <Input
          ref={titleRef}
          isFormValid={isFormValid}
          label="Title"
          input={{ type: "text" }}
        />
        <Input
          ref={descriptionRef}
          isFormValid={isFormValid}
          label="Description"
          input={{ type: "text" }}
        />
        <PrimaryButton>Add Task</PrimaryButton>
        <SecondaryButton as="a" onClick={props.onCloseModal}>
          Cancel
        </SecondaryButton>
      </TaskFormStyled>
    </Modal>
  );
};

export default TaskForm;
