import styled from "styled-components";
import { keyframes } from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(89, 88, 88, 0.7);
  z-index: 10;
`;

const flash = keyframes`
  0% {
    opacity: 0;
    
  }
  50% {
    opacity: 0.3;
   
  }
  80% {
    opacity: 0.7;
   
  }
  100% {
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: white;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${flash} 700ms ease-in;
`;
