import ReactDom from "react-dom";
import { BackDrop, ModalOverlay } from "../styles/Modal.styled";

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop onClick={props.onCloseModal} />,
        document.getElementById("modalOverlay")
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modalOverlay")
      )}
    </>
  );
};

export default Modal;
