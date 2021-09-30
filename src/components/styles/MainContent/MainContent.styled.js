import styled from "styled-components";

export const MainContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const ItemsWrapper = styled.div`
  flex: 0 0 23%;
  background-color: var(--color-grey-light-1);
  min-height: 47rem;

  &::not(::last-child) {
    margin-right: 1.5rem;
  }
`;

export const Header = styled.h3`
  font-size: 1.5rem;
  margin-left: 1rem;
  margin-top: 1rem;
  display: flex;

  span {
    font-size: 1.2rem;
    margin-left: 0.8rem;
    color: #000;
    background-color: var(--color-grey-light-5);
    padding-inline: 0.6rem;
    border-radius: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
