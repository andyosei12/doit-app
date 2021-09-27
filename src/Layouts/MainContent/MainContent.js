import {
  Header,
  ItemsWrapper,
  MainContentWrapper,
} from "../../components/styles/MainContent/MainContent.styled";
import Task from "../../components/Tasks";

const MainContent = (props) => {
  return (
    <MainContentWrapper>
      <ItemsWrapper>
        <Header>
          To do <span>3</span>
        </Header>
        <Task />
        <Task />
      </ItemsWrapper>
      <ItemsWrapper>
        <Header>
          In Progress <span>3</span>
        </Header>
      </ItemsWrapper>
      <ItemsWrapper>
        <Header>
          Q&A <span>3</span>
        </Header>
      </ItemsWrapper>
      <ItemsWrapper>
        <Header>
          Done <span>3</span>
        </Header>
      </ItemsWrapper>
    </MainContentWrapper>
  );
};

export default MainContent;
