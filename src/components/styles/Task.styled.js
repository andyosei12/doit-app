import styled from "styled-components";

export const TaskBg = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  /* height: 6rem; */
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h3 {
    font-size: 1.5rem;
    padding-left: 1rem;
    flex: 0 0 80%;
    position: relative;

    &::before {
      content: "";
      height: 1rem;
      width: 1rem;
      margin-left: 0.5rem;
      position: absolute;
      top: 50%;
      left: -1.5rem;
      transform: translateY(-50%);
      background-color: var(--color-secondary);
      border-radius: 50%;
    }
  }

  & h1 {
    cursor: pointer;
  }
`;

export const TaskContent = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 1.5rem;
`;
