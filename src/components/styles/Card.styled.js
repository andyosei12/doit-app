import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const TaskCard = styled(Card)`
  margin: 3rem 1.3rem;
  position: relative;
`;

export const MoveCard = styled(Card)`
  background: #fff;
  position: absolute;
  top: 4rem;
  right: -9rem;
  padding: 0.5rem 3rem;
  z-index: 100;

  & div {
    display: flex;
    justify-content: space-between;

    & h3 {
      font-size: 1.5rem;
      color: var(--color-grey-dark);
      margin-bottom: 1.5rem;
    }

    & h2 {
      cursor: pointer;
      font-size: 2rem;
      margin-top: -0.5rem;
      margin-right: -2rem;
      color: red;
    }
  }

  & button {
    display: block;
    background: transparent;
    border: none;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover {
      border-bottom: 1px solid var(--color-secondary);
    }
  }
`;
